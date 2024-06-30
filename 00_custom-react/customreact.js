function customRender(reactElement, main){
    // const domElement = document.createElement(reactElement.type)
    // domElement.innerHTML = reactElement.children;
    // domElement.setAttribute('href', reactElement.props.href);
    // domElement.setAttribute('target', reactElement.props.traget)
    
    // main.appendChild(domElement);

    const domElement = document.createElement(reactElement.type);
    domElement.innerHTML = reactElement.children;
    for (const prop in reactElement.props) {
        if(prop === 'children') continue;
        domElement.setAttribute(prop, reactElement.props.prop)
    }
    main.appendChild(domElement)
}

const reactElement = {
    type:"a",
    props:{
        href:"https://google.com",
        traget: '_blank'
    },
    children: 'click me to visit google'
}

const main = document.getElementById("root")

customRender(reactElement, main)