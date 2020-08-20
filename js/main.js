// $(document).ready(function(){
//     /* Beginning of Verbs */
//         $("#back_line_canv").mouseenter(function(){
//             $("#back_line_img").css("display", "inline");
//         });
//         $("#back_line_canv").mouseleave(function(){
//             $("#back_line_img").css("display", "none");
//         });
//         // $("#back_line_canv").mouseenter(function(){
//         //     $("#back_line_img").css("text-shadow", "1px 1px 1px red");
//         // });
//         // $("#back_line_canv").mouseleave(function(){
//         // //     $("#back_line_img").css("text-shadow", "");
//         // });
//         /* Ending of Nouns */
//     });

function changeItem() {
    document.getElementById('#back_line_canv').style.display = 'none';
  }// функция, которая сработает при наведении.
  //она означает - выбрать элемент к Id у которого надо что-то изменить.
  // когда в скобки где написано one-two добавите Id своего элемента
  function rechangeItem() {
    document.getElementById('#back_line_canv').style.display = 'block';
  }// тут всё также. но наобарот. протсес происходящий про отводе курсора.