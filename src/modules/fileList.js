
const fileList = {
  init(){
    this.files = [];
    this.cacheDom();
    this.bindEvents();
  },
  cacheDom(){
    this.fileList = document.getElementById('file-list');
  },
  bindEvents(){
    events.on('drop',(files) => {
      this.files = files;
      this.render();
    });
  },
  render(){
    for (var i = 0; i < this.files.length; i++) {
      var node = document.createElement('LI');
      var textnode = document.createTextNode(this.files[i].name);
      node.appendChild(textnode);
      this.fileList.appendChild(node);
    }
  }
}

export default fileList;
