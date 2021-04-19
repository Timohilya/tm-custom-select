let select = {
    $tmSelect: document.querySelectorAll('[data-select-item]'),
    items: [],
    init: function() {
        if(this.$tmSelect.length){
            this.$tmSelect.forEach(item => {
                obj = {
                    container: item,
                    button: item.querySelector('[data-select-button]'),
                    options: item.querySelector('[data-select-options]'),
                };
                obj = this.hasInput(obj);
                obj = this.hasLabel(obj);
                this.items.push(obj);
            });
        }
        console.log(this.items);
        this.selectInit();
    },
    hasInput: function(obj) {
        if(obj.container.querySelectorAll('[data-select-input]').length) {
            obj.input = obj.container.querySelector('[data-select-input]');
        }
        return obj;
    },
    hasLabel: function(obj) {
        if(obj.container.querySelectorAll('[data-select-label]').length) {
            obj.label = document.querySelector(`[for=${obj.container.querySelector('[data-select-label]').getAttribute('data-select-label')}]`);
        }
        return obj;
    },
    selectInit: function() {
        this.items.forEach(obj => {
            obj.button.addEventListener('click', () => {
                this.showOptions(obj);
                this.listenerForCloseOn(obj);
            });
            if(obj.label != undefined) {
                obj.label.addEventListener('click', () => {
                    this.showOptions(obj);
                    this.listenerForCloseOn(obj);
                });
            };
            obj.options.querySelectorAll("a").forEach(link => {
                link.addEventListener('click', e => {
                    obj.button.querySelector("p").innerHTML = e.target.innerHTML;
                    if(obj.input != undefined) {
                        obj.container.querySelector("input").value = e.target.innerHTML.trim();
                    }
                    this.hideOptions(obj);
                    this.listenerForCloseOf();
                });
            });
        });
    },
    showOptions: function(obj) {
        obj.options.classList.add('show');
    },
    hideOptions: function(obj) {
        obj.options.classList.remove('show');
    },
    listenerForCloseOn: function(obj) {
        document.addEventListener('click', e => {
            if(!this.compareIsClicked(e, Array.prototype.slice.call(obj.container.children)) && e.target != obj.label) {
                this.hideOptions(obj);
                this.listenerForCloseOf();
            }
        })
    },
    listenerForCloseOf: function(obj) {
        document.removeEventListener('click', () => {})
    },
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
};

select.init();