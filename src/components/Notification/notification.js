'use strict';

function notification(config) {
  if(!(this instanceof notification)) {
    return new notification(config);
  }

  var defaults = {
    duration: 3000, //ms，等于0手动关闭
    title: null,
    message: 'message',
    type: null,
    close: true
  }

  this.config = Object.assign(defaults,config);
  this.timer = null;
  this.destroy = this.destroy.bind(this);
  this.start();
}

notification.prototype.start = function () {
  var parent = document.querySelector('.noti-container');
  if(!parent) {
    this.parent = this.initParent()
  }else {
    this.parent = parent;
  }

  this.makeNoti()
};

notification.prototype.initParent = function () {
  var parent = document.createElement('div');
  parent.classList.add('noti-container');
  document.body.appendChild(parent);
  return parent;
};

notification.prototype.makeNoti = function() {
  var noti = document.createElement('div'),
      self = this,
      stamp,
      close;

  if(this.config.title) {
    noti.appendChild(self.makeTitle(self.config.title));
  }
  if(this.config.close) {
    var close = self.makeClose();
    noti.appendChild(close);
    close.addEventListener('click',function() {
      clearTimeout(self.timer);
      self.destroy();
    })
  }
  noti.appendChild(self.makeMsg(self.config.message));

  stamp = new Date().valueOf();
  noti.dataset.id = stamp;
  noti.classList.add('noti');

  this.noti = noti;
  this.parent.appendChild(noti);

  if(!(this.config.duration === 0)) { // 等于0就关闭手动关闭
    this.timer = setTimeout(self.destroy,self.config.duration);
  }
}

notification.prototype.makeTitle = function (title) {
  return this.simpleTextFactory('div',title,'noti-title');
}

notification.prototype.makeMsg = function (content) {
  return this.simpleTextFactory('div',content,'noti-message');
}

notification.prototype.makeClose = function (content) {
  return this.simpleTextFactory('span','&times;','noti-close');
}

notification.prototype.destroy = function (id) {
  var self = this;
  this.timer = null;
  this.noti.classList.add('hide');

  if(self.noti) { // maybe is gone beacause of the last timer
    setTimeout(function() {
        self.parent.removeChild(self.noti);
    },1000)
  };

}

/**
 * notification - description
 *
 * @param  {type} tag
 * @param  {type} content
 * @param  {type} claz
 * @return {type}
 */
notification.prototype.simpleTextFactory = function(tag,content,claz) {
  var div = document.createElement(tag);
  div.innerHTML = content;
  div.classList.add(claz);
  return div;
}

export default notification;
