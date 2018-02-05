//jQuery wrapper
jQuery(document).ready(function(){
    //acoes
    const numbersOnly = function(e){
        //console.log(e.target.value);
        //console.log(this.value.trim().length, this.value.trim());
        //console.log($(this).val()); //usnado o jquery
        //console.log(this.value.replace(/\D/g,''));

        this.value = this.value.replace(/\D/g,'')
        
    }
    var valideteEntry = function(e){
        let cep = this.value

        if(cep.length === 8){
            $(this).removeClass('error');
            getAddress(cep);
        }
        else{
            $(this).addClass('error').focus();
        }
    }

    const getAddress = function(cep){
        
        $.ajax({
            url: `https://viacep.com.br/ws/${cep}/json/`,
            dataType: 'json',
            error: getAddressError,
            success: getAddressSuccess
        })
    }

   const getAddressSuccess = function(address,...args){    //... => chamado de rest Parameters
        $.each(address, function(key,valor){
            $(`#${key}`).val(valor);
        })

   }
   const getAddressError = function(){
       debugger;
   }
    

    //mapeando os eventos
    $("#cep").on("input",numbersOnly).on("focusout",valideteEntry);

});
