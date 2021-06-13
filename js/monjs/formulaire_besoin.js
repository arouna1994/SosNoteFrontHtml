$("input").on("click",function(){
    var resultat =$("input:checked").val();
    if(resultat == 'ouiref'){
        $("#log").html(resultat);
        $("#choix_fichier_import").html('<legend>'+
        'Importer le fichier</legend><label for="formFileMultiple" class="form-label">'+
        ' </label> <input class="form-control" type="file" id="formFileMultiple" multiple />'+
        '<br/><br/><br/>').show(); 
    } else if(resultat == 'nonref'){
        $("#choix_fichier_import").hide()
        
     }
    
})



	
	

