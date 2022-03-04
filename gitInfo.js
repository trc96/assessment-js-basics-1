/*
    For this section of the assessment you will be putting together a cheat sheet for common git commands.  
    You'll provide the command as well as what it does. 
*/

//////////////////PROBLEM 1////////////////////
/*
    Create a variable called 'gitDefinition'.
    It should be a string containing your best definition of what Git is.
*/

//CODE HERE
const gitDefinition = 'Git is a software used to track changes made to files. It allows the user to create local repositories that can later be shared through avenues such as GitHub.';

//////////////////PROBLEM 2////////////////////
/*
    Create a variable called 'gitHubDefinition'.  
    It should be a string containing your best definition of what GitHub is.
*/

//CODE HERE
const gitHubDefinition = 'GitHub is an online and either public or private library for remote repoisitories. It is the most commone way companies share code throughout their software teams and aroudn the world. It offers "distributed version control and source code manaegemnet functionality of Git, plus its own features."';

//////////////////PROBLEM 3////////////////////
/*
    Create a variable called 'gitInitDefinition'.  
    It should be a string containing your best definition of what 'git init' does.
*/

//CODE HERE
const gitInitDefinition = 'The command "git init" initializes an empty local repository, which tells git to start tracking the file changes in that folder.';

//////////////////PROBLEM 4////////////////////
/*
    Create a variable called 'gitCloneDefinition'.  
    It should be a string containing your best definition of what 'git clone' does.
*/

//CODE HERE
const gitCloneDefinition = 'The command "git clone" is meant to copy an existing repository and make a new copy of it in a new directory at another location.';

//////////////////PROBLEM 5////////////////////
/*
    Create a variable called 'gitStatusDefinition'.  
    It should be a string containing your best definition of what 'git status' does.
*/

//CODE HERE
const gitStatusDefinition = 'The command "git status" is meant to show the current state of a working directory.';

//////////////////PROBLEM 6////////////////////
/*
    Create a variable called 'gitAddDefinition'.  
    It should be a string containing your best definition of what 'git add' does.

    Create another variable called 'gitAddCode'.  
    It should be a string containing the code to add all files.
*/

//CODE HERE
const gitAddDefinition = 'The command "git add" adds a change in the working directory to the staging area, or rather it is being prepped to either commit or push to GitHub.';

const gitAddCode = 'git add .';
//////////////////PROBLEM 7////////////////////
/*
    Create a variable called 'gitCommitDefinition'.  
    It should be a string containing your best definition of what 'git commit' does.

    Create a variable called 'gitCommitCode'.  
    It should be a string containing the code to commit using the message "initial commit".
*/

//CODE HERE
const gitCommitDefinition = 'The command "git commit" takes a snapshot of all of the files in a repo at a specific point in time. Additional commits are required in the event of additonal changes.';

const gitCommitCode = 'git commit -m""';

//////////////////PROBLEM 8////////////////////
/*
    Create a variable called 'gitPushDefinition'.  
    It should be a string containing your best definition of what 'git push' does.
*/

//CODE HERE

const gitPushDefinition = 'The command "git push" is used to upload a local repository to a remote one, likely on GitHub.';