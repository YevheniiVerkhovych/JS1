function Menu(sSelector) {
    var m = this;

    //свойства
    m.menu = $(sSelector);
    m.menuItems = m.menu.children("li");
    console.log(m.menuItems);

    //методы
    m.showSubmenu = function(){}
    m.hideSubmenu = function(){}

    //события
    m.menuItems
        .mouseover(m.showSubmenu)
        .mouseout(m.hideSubmenu)
        
}