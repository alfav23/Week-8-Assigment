// MENU APP DESIGNED TO MAINTAIN A LIST OF SHOWS THE USER WANTS TO WATCH
// LIST CLASS TO NAME AND EDIT LISTS
class List { 
    constructor(listName) {
        // LISTNAME VARIABLE TO USE WHEN PROMPTING USER TO PROVIDE A NAME FOR A NEW LIST
        this.listName = listName
        // EMPTY SHOWS ARRAY TO HOLD SHOWS WITHIN LIST
        this.shows = [];
    }
    addShow() { 
        // METHOD TO PROMPT USER TO ADD A SHOW TO SELECTED WATCHLIST AND PUSH IT TO THE SHOWS ARRAY
        let showName = prompt(`Enter name of the show you want to add to ${this.selectedList}: `)
        this.shows.push(new Show(showName));
        // BRING USER BACK TO MAIN MENU
        this.showListMenuOptions();
    }
    deleteShow() {
        // DELETE SHOW METHOD TO PROMPT USER TO ENTER INDEX OF SHOW IN SHOWS ARRAY TO DELETE FROM LIST
        let i = prompt(`Enter index of the show that you wish to delete: `);
        // SPLICE PARTICULAR INDEX OF SHOW FROM LIST
        this.shows.splice(i, 1);
        // RETURN TO MAIN MENU
        this.showListMenuOptions();
    }
    describe() {
        // DESCRIPTION OF CURRENT LIST AND LENGTH OF LIST (NUMBER OF SHOWS TO WATCH)
        alert(`${this.listName} currently has ${this.shows.length} shows.`);
    }
}
// SHOW CLASS TO HOLD PROPERTIES OF SHOWS AND INHERIT PROPERITES OF LIST CLASS
class Show extends List{
    constructor(showName) {
        super()
        this.showName = showName;
    }
    describe() {
        alert(`I want to watch ${this.showName}.`)
    }
}
// MENU CLASS CONTAINING PROPERTIES OF LIST CLASS
class Menu extends List{
    // CREATE EMPTY ARRAY TO STORE WATCHLISTS THAT USER WILL EVENTUALLY CREATE
    // SET CONSTRUCTOR FOR THE LIST THAT THE USER SELECTS TO EDIT/VIEW CALLED SELECTEDLIST WHICH WILL HAVE NO VALUE UNTIL THE USER IS PROMPTED TO ENTER VALUE
    constructor() {
        super()
        // EMPTY LISTS ARRAY
        this.lists = [];
        // SETTING SELECTED LIST PROPERTY TO NULL TO INITIALIZE AND CHANGE LATER
        this.selectedList = null;
    }
    // METHOD CONTAINING ACTIONS BASED ON USER SELECTION
    start() {
        let selection = this.showMainMenuOptions();
        // PRINT TO CONSOLE LOG TO VIEW SELECTION
        console.log("Start selection: ", selection);
        while (selection != 0) {
            // SWITCH TO ACT UPON USER SELECTION
            switch (selection) {
                case `1`:
                    this.viewList();
                    break;
                case `2`:
                    this.createList();
                    break;
                case `3`:
                    this.deleteList();
                    break;
                default:
                    selection = 0;
            }
            selection = this.showMainMenuOptions();
        }
    // ALERT THAT USER WILL SEE IF EXITING (SELECTS 0 OR ANYTHING ELSE BESIDES 1-4)
        alert('Happy watching!')
    }
    // PROMPT FOR USER TO MAKE SELECTION
    showMainMenuOptions() {
        return prompt (`
            0) exit
            1) view list
            2) create new list
            3) delete list
            -----------------

        `);
    }
    // PROMPT FOR FURTHER ACTIONS TO SELECTED LIST
    showListMenuOptions(listInfo) {
        console.log(listInfo);
        return prompt (`
            0) back
            1) add show
            2) delete show
            ----------------
            ${listInfo}
            ${this.shows}
        `);
    }
    // METHOD THAT CREATES A NEW LIST IN THE LISTS ARRAY THAT CAN BE NAMED
    createList() {
        let listName = prompt('Name your new list: ');
        this.lists.push(new List(listName));

        console.log(`This is a new list: `, this.lists);
    }
    // METHOD TO DELETE A LIST FROM LISTS ARRAY
    deleteList() {
        let index = prompt(`Enter index of the list that you wish to delete: `);
        if (index > -1 && index < this.lists.length) {
            this.selectedList = this.lists[index];
            this.lists.splice(this.selectedList);
        }
    }
    // METHOD TO VIEW A LIST IN LISTS ARRAY
    viewList() {
        let index = prompt('Enter index of the list you wish to view: ');
        if (index > -1 && index < this.lists.length) {
            this.selectedList = this.lists[index];
            console.log(this.selectedList);
            let description = 'List Name: ' + this.selectedList.listName + '\n';
            console.log(this.selectedList.listName);
            for (let i = 0; i < this.selectedList.shows.length; i++) {
                description += i + ') ' + this.selectedList.shows[i].listName; 
                // + ' - ' + this.selectedList.shows[i].platform + '\n';
            }
            console.log(description);

            let selection = this.showListMenuOptions(this.selectedList.listName);
                while (selection != 0) {
                    switch (selection) {
                        case `1`:
                            this.addShow();
                            break;
                        case `2`:
                            this.deleteShow();
                            break;
                        default:
                            selection = 0;
                    }
                    selection = this.showMainMenuOptions();
                }
            }
        }
    
}
let menu = new Menu();
menu.start();
