function () {
    if (document.getElementById('Injected') && (elem = document.getElementById('Injected')).parentNode.removeChild(elem)) return;
    s = (document.getElementsByTagName('head')[0]).appendChild(document.createElement('style'));
    s.setAttribute('id', 'Injected');
    s.appendChild(document.createTextNode('*{background-attachment:scroll!important;background-color:rgba(0, 0, 0, 0.1)!important;background-image:none!important;background-position: 0 0 !important;background-repeat:repeat!important;}'));
}
