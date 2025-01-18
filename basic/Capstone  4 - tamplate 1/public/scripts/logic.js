const startBtn = document.querySelector("#start");
const spinner = document.getElementById("loading-spinner"); // Spinner element

if (startBtn) {
    startBtn.addEventListener("click", async () => {
        // Show the spinner
        spinner.style.display = "block";

        if (navigator.geolocation) {
            const timeout = 10000; // Timeout for geolocation (10 seconds)

            const locationPromise = new Promise((resolve, reject) => {
                navigator.geolocation.getCurrentPosition(
                    (position) => resolve(position),
                    (error) => reject(error),
                    { timeout }
                );
            });

            try {
                const position = await locationPromise;
                const latitude = position.coords.latitude;
                const longitude = position.coords.longitude;

                console.log(`Latitude: ${latitude}, Longitude: ${longitude}`);

                // Send location to the backend
                await fetch("/", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({ latitude, longitude }),
                });

                // Redirect to /weather
                window.location.href = "/weather";
            } catch (error) {
                console.error("Error getting location:", error);

                // Fallback to default location (New York)
                const defaultLocation = { latitude: 40.7128, longitude: -74.0060 };

                await fetch("/", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(defaultLocation),
                });

                window.location.href = "/weather";
            } finally {
                // Hide the spinner once complete
                spinner.style.display = "none";
            }
        } else {
            console.log("Geolocation is not supported by this browser.");

            // Fallback to default location (New York)
            const defaultLocation = { latitude: 40.7128, longitude: -74.0060 };

            await fetch("/", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(defaultLocation),
            });

            window.location.href = "/weather";
            spinner.style.display = "none"; // Hide spinner
        }
    });
}
