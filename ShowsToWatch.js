// MENU APP DESIGNED TO MAINTAIN A LIST OF SHOWS THE USER WANTS TO WATCH AND WHERE TO WATCH THEM
class Show {
    constructor(name, platform) {
        this.name = name;
        this.platform = platform;
    }
    describe() {
        return `You can watch ${this.name} on ${this.platform}.`
    }
}
class List {
    constructor(name) {
        this.name = name
        this.shows = [];
    }
    addShow(show) {
        this.shows.push(show);
    }
    deleteShow(show) {
        this.shows.delete(shows[i]);
    }
    describe() {
        return `${this.name} currently has ${this.shows.length} shows.`
    }
}
class Menu {
    constructor() {
        this.lists = [];
        this.selectedList = null;
    }
    // METHOD TO CREATE SWITCH BASED ON USER INPUT FROM PROMPT FROM SHOW MAIN MENU OPTIONS METHOD
    start() {
        let selection = this.showMainMenuOptions();

        while (selection != 0) {
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
    // METHOD TO PROMPT USER TO INPUT A VALUE BASED ON DESIRED ACTION
    showMainMenuOptions() {
        return prompt (`
            0) exit
            1) view list
            2) create new list
            3) delete list
        `);
    }
    showListMenuOptions(listInfo) {
        return prompt (`
            0) back
            1) add show
            2) delete show
            ----------------
            ${listInfo}
        `);
    }
    viewList() {
        let index = prompt('Enter index of the list you wish to view: ');
        if (index > -1 && index < this.lists.length) {
            this.selectedList = this.lists[index];
            let description = 'List Name: ' + this.selectedList.name + '\n';
        }
            for (let i = 0; i < this.selectedList.lists.length; i++) {
                description += i + ') ' + this.selectedList.shows[i].name 
                + ' - ' + this.selectedList.shows[i].platform + '\n';
            }
            let selection = this.showListMenuOptions(description);

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
                }
            }
    // METHOD TO CREATE NEW LIST OF SHOWS AND PUSH THAT LIST TO LIST ARRAY
    createList() {
        let name = prompt('Name your new list: ');
        this.lists.push(new List(name));
    }
    deleteList() {
        let index = prompt(`Enter index of the list that you wish to delete: `);
        if (index > -1 && index < this.lists.length) {
            this.selectedList = this.lists[index];
            this.lists.delete(this.selectedList);
        }
    }
}
let menu = new Menu();
menu.start();