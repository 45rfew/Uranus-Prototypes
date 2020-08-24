try{

createElementFromHTML = function(s){
  var div = document.createElement('div');
  div.innerHTML = s.trim();

  // Change this to div.childNodes to support multiple top-level nodes
  if(div.childNodes.length>1)
    return div.childNodes;
  return div.firstChild;
};

editorManager = {
  isLocked: false,
  lockButton: null,
  isBlurred: false,
  blurButton: null,
  setLock: function(toWhat){
    if(this.isLocked!=toWhat){
      if(this.isBlurred)
        this.isLocked = true;
      else
        this.isLocked = !this.isLocked;
      this.applyLock();
    }
  },
  applyLock: function(){
    game.modding.editor.setReadOnly(this.isLocked);
    this.lockButton.setAttribute("data-tooltip",this.isLocked?"Unlock editor":"Lock editor");
  },
  setBlur: function(toWhat){
    if(this.isBlurred!=toWhat){
      if(!this.isLocked&&!this.isBlurred){
        this.isLocked = true;
        this.applyLock();
      }
      this.isBlurred = !this.isBlurred;
      this.applyBlur();
    }
  },
  applyBlur:function(){
    game.modding.editor.container.children[2].style.filter = this.isBlurred?"blur(15px)":"";
    this.blurButton.setAttribute("data-tooltip",this.isBlurred?"Hide code":"Show code");
  }
};


  var iconsbar = document.getElementsByClassName("editoriconsbar")[0];

  var lockEditorButton = createElementFromHTML(
    '<label href="#" onclick="return editorManager.setLock();" data-tooltip="Lock Editor" id="editorlocktoggle"><i class="fa fa-lock"></i></label>'
  );
  editorManager.lockButton = lockEditorButton;
  iconsbar.appendChild(lockEditorButton);

  var lockBlurButton = createElementFromHTML(
    '<label href="#" onclick="return editorManager.setBlur();" data-tooltip="Hide code" id="editorlocktoggle"><i class="fa fa-eye-slash"></i></label>'
  );
  editorManager.blurButton = lockBlurButton;
  iconsbar.appendChild(lockBlurButton);

}catch(e){
  log("Could not inject own UI - running in some kind of a sandbox?");
  /*log(e.message);
  log(e.stack);*/
}
