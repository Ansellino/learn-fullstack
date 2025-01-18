const searchBtn = document.querySelector("#search-btn");
const cityInput = document.querySelector("#search-bar");

if (searchBtn) {
    // Click event listener for the search button
    searchBtn.addEventListener("click", async () => {  
        const city = cityInput.value.trim();

        if (!city) {
            console.log("City name is required.");
            return; // You can display a message to the user here
        }

        console.log(`Searching for weather in ${city}`);

        // Send city name to the backend
        await fetch("/weather", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ city }), // Send city data
        });
        window.location.href = "/weather";
    });

    // Keydown event listener for the Enter key
    cityInput.addEventListener("keydown", async (event) => {  
        if (event.key === "Enter") {
            const city = cityInput.value.trim();

            if (!city) {
                console.log("City name is required.");
                return; // You can display a message to the user here
            }

            console.log(`Searching for weather in ${city}`);

            // Send city name to the backend
            await fetch("/weather", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ city }), // Send city data
            });
            window.location.href = "/weather";
        }
    });
}
