 class AddNoteScreen{

    get skipBtn(){
        return $('//*[@text="SKIP"]');
    }
   
    get addNoteBtn(){
      
        return $('//*[@text="Add note"]');

    }
    
    get clickText(){
      
        return $('//*[@text="Text"]');

    }
    get editText(){
      
        return $('//*[@text="Editing"]')

    }

    get noteTitle(){
      
        return $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/edit_title"]');

    }

    get noteBody(){
      
        return  $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/edit_note"]');

    }
    get editNote(){
        return $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/edit_btn"]');
    }
    get viewNote(){
        return $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/view_note"]');
    }
    get moreIcon(){
        return  $('~More');
    }
    get deleteIcon(){
        return  $('//*[@text="Delete"]')
         
    }
    get navigation(){
     return $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/icon_nav"]')
    }
    get trashcan(){
        return $('//*[@text="Trash Can"]')
    }
    get trashcanitem(){
        return  $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/title"]')
    }
    get Existingnote(){
        return  $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/title"]')
    }
    
}
export default new AddNoteScreen();