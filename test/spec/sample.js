describe('Android Element Test', () => {

    xit('Find element by accesibility ID',async () => {
      //find element by acccesssibility ID

     const aapOption=await  $('~App')


      //click on element 
      await aapOption.click();

     

      //assertion 

      const Actionbar=await $('~Action Bar');

      await Actionbar.waitUntil(async function () {
        return (await this.getText()) === 'Action Bar'
    }, {
        timeout: 5000,
        timeoutMsg: 'expected text to be different after 5s'
    })
      await expect(Actionbar).toBeExisting();

    
        
    });

    xit('Find Element By Classname', async() => {

        //find element by classname 
        const classname=await $('android.widget.TextView')
        console.log(await classname.getText());

        //Assertion
        await expect(classname).toHaveText("API Demos");
        
    });

    xit('Find Element By Xapth', async() => {
        //find element by acccesssibility ID
        const aapOption=await  $('~App')
      await aapOption.click();
        //find element by classname 
     await $('//android.widget.TextView[@content-desc="Alert Dialogs"]').click();
     //find by resource id
     await $('//android.widget.Button[@resource-id="io.appium.android.apis:id/select_button"]').click();
     //find elemtn by text
     await $('//android.widget.TextView[@text="Command two"]').click();

     const textAssertion= await $('android.widget.TextView');

     await expect(textAssertion).toHaveText("You selected: 1 , Command two");
        
    });

    xit('Find Element By UiAutomator', async() => {
      //Find by text contains
      const aapOption=await  $('~App')


      //click on element 
      await aapOption.click();
      await $('android=new UiSelector().textContains("Alert")').click()
        
    });
    xit('Find multiple elements', async() => {
        //Find by text contains
       let expectedList=['API Demos','Accessibility','Animation','App','Content','Graphics','Media','NFC','OS','Preference','Text','Views',"Access'ibility"];
       let actualList=[];


        const textlist=await $$('//android.widget.TextView');

        for(let element of textlist )
        {
           actualList.push(await element.getText());


        }
      console.log(actualList);

      await expect(actualList).toEqual(expectedList);
  
      });

      xit('Text input fields', async() => {
        await  $('~Views').click();
        await $('//android.widget.TextView[@text="Auto Complete"]').click();
        await $('//*[@content-desc="1. Screen Top"]').click();
       const countrytext= await $('//android.widget.AutoCompleteTextView[@resource-id="io.appium.android.apis:id/edit"]');
       await countrytext.addValue('India');
       await expect(countrytext).toHaveText('India');


      
      });
      
    
});