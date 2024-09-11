
function customRender(reactElelment, mainContainer){
    // const domElement = document.createElement(reactElelment.type)
    // domElement.innerHTML = reactElelment.children
    // domElement.setAttribute('href', reactElelment.props.href)
    // domElement.setAttribute('target', reactElelment.props.target)

    // mainContainer.appendChild(domElement)


    const domElement = document.createElement(reactElelment.type)
    domElement.innerHTML = reactElelment.children

    for (const prop in reactElelment.props) {
        if(prop === 'children') continue;
        domElement.setAttribute(prop, reactElelment.props[prop])
    }

    mainContainer.appendChild(domElement)
}

const reactElelment = {
    type : 'a',
    props : {
        href : 'https://googl.com',
        target : '_blank'
    },
    children : 'Click here to visit Google!'
}

const mainContainer = document.getElementById('root')

customRender(reactElelment, mainContainer)