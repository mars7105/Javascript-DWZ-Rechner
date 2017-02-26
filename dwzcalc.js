/**
 * @author Martin Schmuck
 */
$(document).ready(function() {
	var addrow = $.cookie('addrow');
	if ( typeof addrow === 'undefined') {
		addrow = 0;
	} else {
		for ( i = 0; i < addrow; i++) {
			addFields();
		}
	}
	// Formular Variablen
	var formular_Alter = $.cookie('formular_Alter');
	if ( typeof formular_Alter === 'undefined') {

	} else {
		$('#alter').val(formular_Alter);
	}

	var formular_EigeneDWZ = $.cookie('formular_EigeneDWZ');
	if ( typeof formular_EigeneDWZ === 'undefined') {

	} else {
		$('input[name="eigenedwz"]').val(formular_EigeneDWZ);
	}

	var dwzdata = $.cookie("DWZData");
	if ( typeof dwzdata === 'undefined') {

	} else {
		var dwz = $.parseJSON(dwzdata);
		$('input[name="dwz"]').each(function(index) {
			$(this).val(dwz[index]);
		});
	}

	var punktedata = $.cookie("PunkteData");
	if ( typeof punktedata === 'undefined') {

	} else {
		var punkte = $.parseJSON(punktedata);
		$('select[name="punkte"]').each(function(index) {
			$(this).val(punkte[index]);
		});
	}
	$('.addInputs').click(function() {
		addrow++;
	});
	$('.removeInputs').click(function() {
		addrow--;
		if (addrow < 0) {
			addrow = 0;
		}
	});
	$('#savecookie').click(function() {
		var formular_Alter = $('#alter').val();

		$.cookie('formular_Alter', formular_Alter, {
			expires : 365,
			path : '/'
		});
		var formular_EigeneDWZ = $('input[name="eigenedwz"]').val();
		$.cookie('formular_EigeneDWZ', formular_EigeneDWZ, {
			expires : 365,
			path : '/'
		});
		var ar = new Array;
		$('input[name="dwz"]').each(function() {
			ar.push($(this).val());
		});
		var jsonstring = JSON.stringify(ar);
		$.cookie("DWZData", jsonstring, {
			expires : 365,
			path : '/'
		});

		var ar2 = new Array;
		$('select[name="punkte"]').each(function() {
			ar2.push($(this).val());
		});
		var jsonstring = JSON.stringify(ar2);
		$.cookie("PunkteData", jsonstring, {
			expires : 365,
			path : '/'
		});
		$.cookie("addrow", addrow, {
			expires : 365,
			path : '/'
		});
		alert("Daten gespeichert");
	});
});

