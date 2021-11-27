OV.GetIntegerFromStyle = function (parameter)
{
    return Math.round (parseFloat (parameter));
};

OV.GetElementExternalWidth = function (style)
{
    let padding = OV.GetIntegerFromStyle (style.paddingLeft) + OV.GetIntegerFromStyle (style.paddingRight);
    let border = OV.GetIntegerFromStyle (style.borderLeftWidth) + OV.GetIntegerFromStyle (style.borderRightWidth);
    let margin = OV.GetIntegerFromStyle (style.marginLeft) + OV.GetIntegerFromStyle (style.marginRight);
    return padding + border + margin;
};

OV.GetElementExternalHeight = function (style)
{
    let padding = OV.GetIntegerFromStyle (style.paddingTop) + OV.GetIntegerFromStyle (style.paddingBottom);
    let border = OV.GetIntegerFromStyle (style.borderTopWidth) + OV.GetIntegerFromStyle (style.borderBottomWidth);
    let margin = OV.GetIntegerFromStyle (style.marginTop) + OV.GetIntegerFromStyle (style.marginBottom);
    return padding + border + margin;
};

OV.GetInnerDimensions = function (element, outerWidth, outerHeight)
{
    let style = getComputedStyle (element);
    let width = outerWidth - OV.GetElementExternalWidth (style);
    let height = outerHeight - OV.GetElementExternalHeight (style);
    return {
        width : width,
        height : height
    };
};

OV.CreateDomElement = function (elementType, className, innerHTML)
{
    let element = document.createElement (elementType);
    if (className) {
        element.className = className;
    }
    if (innerHTML) {
        element.innerHTML = innerHTML;
    }
    return element;
};

OV.AddDomElement = function (parentElement, elementType, className, innerHTML)
{
    let element = OV.CreateDomElement (elementType, className, innerHTML);
    parentElement.appendChild (element);
    return element;
};

OV.ClearDomElement = function (element)
{
    while (element.firstChild) {
        element.removeChild (element.firstChild);
    }
};

OV.InsertDomElementBefore = function (newElement, existingElement)
{
    existingElement.parentNode.insertBefore (newElement, existingElement);
};

OV.InsertDomElementAfter = function (newElement, existingElement)
{
    existingElement.parentNode.insertBefore (newElement, existingElement.nextSibling);
};

OV.ShowDomElement = function (element)
{
    element.style.display = 'block';
};

OV.HideDomElement = function (element)
{
    element.style.display = 'none';
};

OV.IsDomElementVisible = function (element)
{
    return element.style.display !== 'none';
};

OV.SetDomElementWidth = function (element, width)
{
    element.style.width = width.toString () + 'px';
};

OV.SetDomElementHeight = function (element, height)
{
    element.style.height = height.toString () + 'px';
};

OV.GetDomElementOuterWidth = function (element)
{
    let style = getComputedStyle (element);
    return element.offsetWidth + OV.GetIntegerFromStyle (style.marginLeft) + OV.GetIntegerFromStyle (style.marginRight);
};

OV.GetDomElementOuterHeight = function (element)
{
    let style = getComputedStyle (element);
    return element.offsetHeight + OV.GetIntegerFromStyle (style.marginTop) + OV.GetIntegerFromStyle (style.marginBottom);
};

OV.SetDomElementOuterWidth = function (element, width)
{
    let style = getComputedStyle (element);
    OV.SetDomElementWidth (element, width - OV.GetElementExternalWidth (style));
};

OV.SetDomElementOuterHeight = function (element, height)
{
    let style = getComputedStyle (element);
    OV.SetDomElementHeight (element, height - OV.GetElementExternalHeight (style));
};

OV.CreateDiv = function (className, innerHTML)
{
    return OV.CreateDomElement ('div', className, innerHTML);
};

OV.AddDiv = function (parentElement, className, innerHTML)
{
    return OV.AddDomElement (parentElement, 'div', className, innerHTML);
};
