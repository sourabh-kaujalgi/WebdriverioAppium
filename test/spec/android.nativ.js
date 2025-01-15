describe('Android Native Feature Test', () => {
    xit('Access Activity Directly', async() => {
         //Acess and Activity
        await driver.startActivity("io.appium.android.apis","io.appium.android.apis.app.AlertDialogSamples");
        //pause
       await  driver.pause(4000);
        //Assertion
        await expect($('//android.view.ViewGroup[@resource-id="android:id/action_bar"]')).toExist();
        
    });

    xit('Working with dialog boxes', async() => {
        //Acess and Activity
       await driver.startActivity("io.appium.android.apis","io.appium.android.apis.app.AlertDialogSamples");
       //pause
      await  driver.pause(4000);
       //Assertion
       await expect($('//android.view.ViewGroup[@resource-id="android:id/action_bar"]')).toExist();
       await $('~OK Cancel dialog with a message').click();

      //await driver.acceptAlert();
      await driver.dismissAlert();
       await expect($('//*[@resource-id="android:id/alertTitle"]')).not.toExist();
       
   });
   xit('Vertical Scrolling', async() => {
   await $('~App').click();
   await $('~Activity').click();
   
    //It is not stable if element gets moved
   //await $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollToEnd(1,5)');

   //scrollTextIntoView- more stable

   await $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollTextIntoView("SetWallpaper")').click();
   //await $('~SetWallpaper').toExist();

 
   
});

it('Horizontal Scrolling', async() => {

    await driver.startActivity("io.appium.android.apis","io.appium.android.apis.view.Gallery1");

    
   //Horizontal scrollong 

   const selector = `android=new UiScrollable(new UiSelector().scrollable(true)).setAsHorizontalList().scrollForward()`;
   await $(selector);

   await driver.pause(3000);


    
 });
    
});
