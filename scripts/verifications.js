function IsNameInputFilledOut(input) {
    return input ? true : false;
}

function IsSymbolSelected(object) {
    return object.symbol != undefined || object.symbol != null ? true : false;
}

function IsGridFull(items) {
    const numberGridFilled = Array.from(items).filter(item => item.children.length > 0).length;
    return numberGridFilled == 9 ? true : false;
}

function ValidatingWinnerRows(element) {
    
    let arrayOfElements = Array.from(element.children)
    
    //*If 3 elements in a row have 1 as name, crosses won 
    if (arrayOfElements.filter(el => el.name == 1).length == 3) return 1;
    
    //*If 3 elements in a row have 1 as name, circles won
    if (arrayOfElements.filter(el => el.name == 0).length == 3) return 0;
    
    //* If there's no match returns null
    return null;
}


function ValidatingWinnerColumns(element) {
    //! let targetParentNextSibling = targetParent.nextElementSibling;
    //! let targetParentPreviousSibling = targetParent.previousElementSibling;
}


