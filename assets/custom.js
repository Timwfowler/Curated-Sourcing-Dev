

//`{&quot;image&quot;:&quot;gid:\/\/shopify\/MediaImage\/21877145469057&quot;,&quot;option_title&quot;:&quot;Black&quot;}`
//`{&quot;image&quot;:&quot;gid:\/\/shopify\/MediaImage\/21877145469057&quot;,&quot;option_title&quot;:&quot;Black&quot;}`



const optionWraps = document.querySelectorAll('.meta-option-wrap');

optionWraps.forEach(optionWrap => {
  const options = optionWrap.querySelectorAll('.meta-option');


  options.forEach(option => {
    option.addEventListener('click', () => {
      options.forEach(option => {
        option.classList.remove('selected');
      })
      option.classList.add('selected');
      const thisMetafieldData = option.getAttribute('data-metafield-value');
      console.log("click", thisMetafieldData);
 
      checkDependacies(thisMetafieldData, optionWrap);
    })
  })
})

function checkDependacies(thisMetafieldData, optionWrap) {

  const allOptions = document.querySelectorAll('.meta-option');

  const allSelectedOptions = document.querySelectorAll('.meta-option.selected');


  allSelectedOptions.forEach(selectedOption => {    

    allOptions.forEach(option => {
      const loopOptionMetafieldData = option.getAttribute('data-metafield-dependancy');


      if (loopOptionMetafieldData.includes(thisMetafieldData)) {  
        option.classList.add('hide');

  
      }else{
        option.classList.remove('hide');
      }
   
    })

  })

  allOptions.forEach(option => {
    const loopOptionMetafieldData = option.getAttribute('data-metafield-dependancy');

    allSelectedOptions.forEach(selectedOption => {
      const selectedOptionMetafieldData = selectedOption.getAttribute('data-metafield-value');

      if (loopOptionMetafieldData.includes(selectedOptionMetafieldData)) {
        option.classList.add('hide');
        console.log('hide 2');
      }else{
        // option.classList.remove('hide');
      }
    })

    // if (loopOptionMetafieldData.includes(thisMetafieldData)) {
    //   option.classList.add('hide');
    // }else{
    //   option.classList.remove('hide');
    // }
  })

}

