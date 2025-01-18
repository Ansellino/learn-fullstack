import express from "express"


const router = express.Router()

router.post('/settings', (req, res) => {
    // Get the data from the form submission
    const { temp, wind, pressure, distance } = req.body;

    // Store the settings in the session
    req.session.userSettings = { temp, wind, pressure, distance };

    // Log the settings (for testing)
    console.log({ temp, wind, pressure, distance });

    // Send a response back
    // res.json({ message: 'Settings saved successfully!' });
    res.redirect("/weather")
});




router.get("/settings",(req,res)=>{
    const userSettings = req.session.userSettings || {};
    res.render('settings', { userSettings ,image:req.image});

})

export default router;     