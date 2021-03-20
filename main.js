let CustomSelect = {
    items: [],
    compareIsClicked: function(e, parentElement) {
        let result = false;
        function compareElements(e, parentElement) {
            parentElement.forEach(element => {
                if(element.children.length === 0) {
                    if (e.target.outerHTML === element.outerHTML) {
                        result = true
                    }
                } else {
                    if (e.target.outerHTML === element.outerHTML) {
                        result = true
                    }
                    compareElements(e, Array.prototype.slice.call(element.children));
                }
            })
        }
        compareElements(e, parentElement);
        return result
    },
    select: function() {
        this.items.forEach(element => {
            element.button.addEventListener('click', () => {
                element.options.classList.add('show');
                document.addEventListener('click', (e) => {
                    if(!this.compareIsClicked(e, Array.prototype.slice.call(element.container.children))) {
                        element.options.classList.remove('show');
                        document.removeEventListener('click', () => {})
                    }
                })
            });
            element.options.querySelectorAll("a").forEach(link => {
                link.addEventListener('click', e => {
                    element.button.querySelector("p").innerHTML = e.target.innerHTML;
                    element.options.classList.remove('show');
                    document.removeEventListener('click', () => {})
                });
            });
        });
    },
    init: function() {
        if(document.querySelector(".tm-custom-select") != undefined){
            document.querySelectorAll(".tm-custom-select").forEach(element => {
                this.items.push({
                    container: element, 
                    button: element.querySelector(".tm-custom-select__selected"),
                    options: element.querySelector(".tm-custom-select__options")
                });
            });
        }
        this.select();
    },
};

CustomSelect.init();
