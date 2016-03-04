function _tag( element, content, attibutes ){

	content = content || '';  // Set content to an empty string if false or null

	if ( content instanceof Array ) {
		var output = document.createDocumentFragment();
		output.innerHTML = '';
		output.outerHTML = '';
		content.reverse();

		for ( var i = content.length - 1; i >= 0; i-- ) {

			if( content[i] === null || content[i] === false ) {
				content[i] = '';
			}
			else {
				content[i] = content[i];
			}

			var t = document.createElement( element );
			assignAttributes( t );
			if ( content[i] instanceof DocumentFragment) {
				t.appendChild( content[i] );
			} 
			else {
				t.innerHTML = content[i].outerHTML || content[i];
			}
			output.appendChild( t );
			output.innerHTML += t.outerHTML;
			output.outerHTML += t.outerHTML;
		}
		return output;
	}
	else {
		var tag = document.createElement( element );
		assignAttributes( tag );
		if ( !(content instanceof DocumentFragment) ) {
			tag.innerHTML = content.outerHTML || content;
		}
		else {
			tag.appendChild( content );
		}
		return tag;
	}

	function assignAttributes( tag ){
		if( attibutes ) {
			var keys = Object.keys( attibutes );
			keys.reverse();

			for ( var i = keys.length - 1; i >= 0; i-- ) {
				if( keys[i].toLowerCase() == 'class') {
					tag.className = attibutes[ keys[i] ];
				}
				else {
					tag.setAttribute( keys[i], attibutes[ keys[i] ] );
				}	
			}
		}
	}	
}
