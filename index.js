function EditCR(o) {
    o.querySelectorAll('*').forEach(child=>{
        child.contentEditable="true"
        if(child.shadowRoot) {
            child.shadowRoot.firstElementChild.contentEditable="true"
            EditCR(child.shadowRoot)
        }
    })
}
