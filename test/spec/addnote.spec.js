import addnote from "../screenobjects/android/addnotescreen" 
import {$,$$,expect,driver} from '@wdio/globals';

describe('Add Note demo', () => {
   
    it('Add a note', async() => {
        await driver.pause(3000);
         await addnote.skipBtn.click();
       
        await addnote.addNoteBtn.click();
        await addnote.clickText.click();
       await expect(addnote.editText).toBeDisplayed();
        
        //Add note title
        const notetiltle=await addnote.noteTitle;
        await notetiltle.setValue("Favourate Animal List");
        
          //Add note body
          const notebody=await addnote.noteBody ;
          await notebody.addValue("Sourabh\nRajiv\nKaujalgi");

          //Save the changes
          await driver.back();
          await driver.back();

          await expect(addnote.editNote)
          .toBeDisplayed();

        await expect(addnote.viewNote)
        .toHaveText("Sourabh\nRajiv\nKaujalgi");
        await driver.back();
    });

    it('Check note deleted', async() => {

        await driver.pause(3000);
        
        const note=await addnote.Existingnote.getText();

        //Click on note
        await addnote.Existingnote.click();

        //Click on more icon 
        await addnote.moreIcon.click();

        //click on delete button 
       await addnote.deleteIcon.click();

       //Accept Alert 
      await driver.acceptAlert();

      //click on nav icon 
      await addnote.navigation.click();

      //clcik on trash can 
      await addnote.trashcan.click();

     

      const trashcanitem=await addnote.trashcanitem.getText();

      expect(trashcanitem).toHaveText(note);
 
    });
    
    
    
});