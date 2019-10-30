// Jqueryをnode_moduleからインポート

import $ from 'jquery'


export default class test {
  constructor () {
    this.BindEvent()
  }

  BindEvent () {
    //3秒後にクラスを付与するだけ
    setTimeout(()=>{
      $('.sample-container').addClass('is-black')
    },3000);    
  }
}