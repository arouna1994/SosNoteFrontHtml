$("input").on("click",function(){
    var resultat =$("input:checked").val();
    if(resultat == 'ouiref'){
        $("#log").html(resultat);
        $("div[id=row2]").hide()
        $("#choix_fichier_import").html('<legend><span class="number">5</span>'+
        'Importer fichier</legend><label for="formFileMultiple" class="form-label">'+
        ' </label> <input class="form-control" type="file" id="formFileMultiple" multiple />'+
        '<br/><br/><br/>').show(); 
    } else if(resultat == 'nonref'){
        $("#choix_fichier_import").hide()
        $("#row").append('<div id="row2" class="col-sm-6">'+
        '<fieldset id="saisir_donnee">'+
        '<legend><span class="number">5</span>Saisir mes infos personnels </legend>'+
        '<label for="structure_ciblee">Structure ciblée:</label>'+
        '<input type="text" id="structure_ciblee" name="structure_ciblee">'+

        '<label for="nom">Nom:</label>'+
        '<input type="text" id="nom" name="nom">'+
        
        '<label for="prenom">Prénom:</label>'+
        '<input type="text" id="prenom" name="prenom">'+

        '<label for="etat_civil">Etat civil:</label>'+
        '<input type="text" id="etat_civil" name="etat_civil">'+

        '<label for="date_naissance">Date de naissance:</label>'+
        '<input type="text" id="date_naissance" name="date_naissance">'+

        '<label for="email">Email:</label>'+
        '<input type="email" id="email" name="email">'+

        '<label for="telephone">Téléphone:</label>'+
        '<input type="text" id="telephone" name="telephone">'+

         ' <label for="adresse_phy">Adresse physique:</label>'+
        '<input type="text" id="adresse_phy" name="adresse_phy">'+
        '<br/><br/><br/>'+
        '</fieldset>'+
		'<fieldset id="parcours_professionel">'+
        '<legend><span class="number">6</span>Parcours professionel</legend>'+
        '<label for="stage">Stage:</label>'+
       ' <textarea id="stage" name="stage"></textarea>'+

        '<label for="emploi">Emploi:</label>'+
        '<textarea id="emploi" name="emploi"></textarea>'+
        '<br/><br/><br/>'+
       ' </fieldset>'+
		'<fieldset id="parcours_etudes">'+
        '<legend><span class="number">7</span>Parcours d\'études</legend>'+
        '<label for="parcours_etude">Saisir les informations:</label>'+
        '<textarea id="parcours_etude" name="parcours_etude"></textarea>'+
        '<br/><br/><br/>'+
        '</fieldset>'+
		'<fieldset id="langue">'+
        ' <legend><span class="number">8</span>Langues</legend>'+
        '<div class="row">'+
           ' <div class="row">'+
              '  <div class="col-sm-4">'+
                  '  <label for="oral">Oral:</label>'+
                   ' <input type="text" id="oral" name="oral">'+
                   '</div>'+
                   '<div class="col-sm-4">'+

                   ' <label for="ecrit">Ecrit:</label>'+
                   ' <input type="text" id="ecrit" name="ecrit">'+
                   '  </div>'+
                   ' <div class="col-sm-4">'+

                   ' <label for="comprehension">Compréhension:</label>'+
                   '  <input type="text" id="comprehension" name="comprehension"> '+
                   '  </div>'+
    
                   ' </div>'+
                   '  <div class="row">'+
                   '    <div class="col-sm-4">'+
                   '        <label for="oral">Oral:</label>'+
                   '        <input type="text" id="oral" name="oral">'+
                   '     </div>'+
                   '    <div class="col-sm-4">'+

                   '     <label for="ecrit">Ecrit:</label>'+
                   '     <input type="text" id="ecrit" name="ecrit">'+
                   '  </div>'+
                   '  <div class="col-sm-4">'+

                   '    <label for="comprehension">Compréhension:</label>'+
                   '     <input type="text" id="comprehension" name="comprehension"> '+
                   '  </div>'+
    
                   ' </div>'+
                   ' <div class="row">'+
                   '    <div class="col-sm-4">'+
                   '        <label for="oral">Oral:</label>'+
                   '   <input type="text" id="oral" name="oral">'+
                   '  </div>'+
                   '  <div class="col-sm-4">'+

                   '      <label for="ecrit">Ecrit:</label>'+
                   '      <input type="text" id="ecrit" name="ecrit">'+
                   '    </div>'+
                   '  <div class="col-sm-4">'+

                   '   <label for="comprehension">Compréhension:</label>'+
                    '<input type="text" id="comprehension" name="comprehension"> '+
                    '  </div>'+
    
                    '  </div>'+

                    '  </div>'+
        '<br/><br/><br/>'+
            
        '</fieldset>'+
   ' </div>'
        
        )
    }
    
})

