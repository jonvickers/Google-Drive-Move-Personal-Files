function searchFilesInSharedDrive() {
  var sharedDriveId = 'PASTE DRIVE FOLDER ID HERE';
  var query = 'title contains "Copy of"';
  var mode = 'rename'; //mode = search | rename
  var oldTitle = "";
  var newTitle = "";

  // YOU MUST install the Drive Full API under Services
  
  var files = Drive.Files.list({
    q: query,
    corpora: 'drive',
    driveId: sharedDriveId,
    includeItemsFromAllDrives: true,
    supportsAllDrives: true
  });

  for (var i = 0; i < files.items.length; i++) {
    
    oldTitle = files.items[i].title;

    var newTitle = oldTitle.replace('Copy of ', '');

    if(mode=='rename'){
      var file = DriveApp.getFileById(files.items[i].id);
      file.setName(newTitle);
    }

    Logger.log(files.items[i].title +' rename  to "'+newTitle+'"');

  }
}
