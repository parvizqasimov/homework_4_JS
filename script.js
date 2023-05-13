class ItemList {
    constructor() {
      this.list = document.getElementById("list");
      this.inputField = document.getElementById("inputField");
      this.addButton = document.getElementById("addButton");
      this.count = 1;

      this.addButton.addEventListener("click", this.addItem.bind(this));
    }

    addItem() {
      var inputValue = this.inputField.value.trim();

      if (inputValue !== "") {
        
        var item = document.createElement("div");
        item.setAttribute("class", "item");

        
        var itemText = document.createElement("span");
        itemText.innerHTML = inputValue;

        
        var deleteButton = document.createElement("button");
        deleteButton.setAttribute("class", "delete-button");
        deleteButton.innerHTML = "Delete";
        deleteButton.onclick = () => {
          this.list.removeChild(item);
        };        
        item.appendChild(itemText);
        item.appendChild(deleteButton);        
        this.list.appendChild(item);        
        this.inputField.value = "";


        this.count++;
      }
    }
  }

  var itemList = new ItemList();