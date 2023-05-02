

export interface Item {
     id: string;
     item: string;
     checked: boolean;
}

export default class ListItem implements Item {

    constructor(  
        private _id: string = "",
        private _item: string = "",
        private _checked: boolean = false,
    ){ }

    get id(): string {
        return this._id;
    }
    set id(id: string ) {
         this._id = id;
         return
    }

    get item(): string {
        return this._item;
    }
    set item(item: string){
        this._item = item
        return
    }
    
    get checked(): boolean { 
        return this._checked;
    }
    set checked(checked: boolean){
        this._checked = checked
        return
    }
}












//////////////////////////////////////////////////////////////////////////////////////
                            // ALTERNATIVE

// export default class ListItem {
//      private id: string
//      private item: string
//      private checked: boolean

//     constructor() {
//         this.id = ""
//         this.item = ""
//         this.checked = false
//     }

//     public get idInfo(): string {
//         return this.id
//     }
//     public get itemInfo(): string {
//         return this.item
//     }
//     public get checkedInfo(): boolean {
//         return this.checked
//     }
    
//     public set idInfo (_id: string) {
//         if(typeof _id === "string"){
//             this.id = _id
//             return
//         }else {
//             throw new Error("Id is not a string")
//         }
//     }

//     public set itemInfo (_item: string){
//         if (typeof _item === "string"){
//             this.item = _item
//             return
//         }else {
//             throw new Error("Item must be a string")
//         }
//     }
//     public set checkedInfo (_checked: boolean){
//         if (typeof _checked === "string"){
//             this.checked = _checked
//             return
//         }else {
//             throw new Error("checked value must be a boolean")
//         }
//     }
// }

// const testClass = new ListItem();

// testClass.itemInfo = "yoloooooo"
// console.log("testClasees", testClass.itemInfo)