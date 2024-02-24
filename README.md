# Google My Drive Move Personal Files to Shared Drive Team Drive
Script to help migrate personal google drive my files to a shared drive or team drive

# Modes
## Collect
this mode allows the script to parse the entire folder tree and collect all of the emails of all of the document owners.  If you are able to make contact with these people, you can let them run the script under their name to move files to the new shared drive.  If you do not have contact with them, then add their email address to the emailsToAlwaysCopy variable, so the script will go ahead and make a copy of these files, and move the original file to the "deleted" folder for you to review later.

## Move
this mode will attempt to move any files where the person running the script is the owner of the file.  If they are NOT the owner it will skip the file, UNLESS the person is in the emailsToAlwaysCopy list, in this case it will go ahead and make a copy of the file and move the original to the deleted folder.

## Copy
this mode does not even attempt to move any files when run as an owner of the file. it instead just copies every file.

# Google Doc
https://docs.google.com/document/d/1cxS8ig2gsVw6FqBaLGl-wB8TRUQOwaELVaUwyLOk3_g/edit#heading=h.f6ekqczexpyl

You need to make a copy of this document, the Google Apps Script code is attached to this document.

Read this doc there are some notes in there.

# Google Apps Script
https://script.google.com/home/projects/1VLOLmxZ9RScn_RTsOXPoM4A0icrR1KBEHJF1OiKBWjkHqTCmCs_utb1O/edit

The script should copy along with the Google Drive Document when you make a copy to execute the code under your logins

# Rename Copy of  Files
https://script.google.com/home/projects/1VLOLmxZ9RScn_RTsOXPoM4A0icrR1KBEHJF1OiKBWjkHqTCmCs_utb1O/edit

During the copy process some of the documents can be appended with a prefix "Copy of". This script will search the shared drive and rename the prefix off of the file



