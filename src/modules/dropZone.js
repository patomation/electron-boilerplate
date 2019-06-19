
const dropZone = {
  init(){
    this.files = [];
    this.cacheDom();
    this.bindEvents();
  },
  cacheDom(){
    this.dropZone = document.getElementById('drop-zone');
  },
  bindEvents(){
    this.dropZone.addEventListener('dragenter', this.dragenter.bind(this), false)
    this.dropZone.addEventListener('dragleave', this.dragleave.bind(this), false)
    this.dropZone.addEventListener('dragover', this.dragover.bind(this), false)
    this.dropZone.addEventListener('drop', this.drop.bind(this), false)
  },
  render(){
  },
  dragenter(){},
  dragleave(){},
  dragover(){},
  drop(e){
    console.log('drop');
    let dt = e.dataTransfer
    let files = dt.files
    this.files = files;
    events.emit('drop', files);
  },

}

export default dropZone;
