
			$(document).on('click', '#start', function(){
				$('#main_pane').html('');
				var out = `<div class='form-group m-2'>
										<h2 class='head-text'>Kana/kina cikin wani yanayi ne na rashin lafiya a yanzu?</h2>
										<div class="row">
											<button class="btn btn-dark col m-2" id="is_sick" >Eh</button>
											<button class="btn btn-dark col m-2" id="not_sick" >A'a</button>
										</div>
									</div>`;
				$('#main_pane').append(out);
			});

			$(document).on('click', '#not_sick', function(){
				$('#main_pane').html('');
				var out = `<div class='form-group m-2'>
										<h3 class='head-text text-justify'>
											Tunda ba'a cikin wani yanayi na rashin lafiya,
											 akwai zato me kyau na cewa ba'a dauke da wannan cuta ta coronavirus
										</h3>
										<br>
										<p class='text-main'>
											Kada a manta da hanyoyin kariya na wannan cuta
											<ul class='text-main'>
												<li>Wanke hannu akai-akai</li>
												<li>Bayar da tazara</li>
												<li>Rufe Hanci da baki da gwiwar hannu a lokacin da akeyin tari ko atishawa</li>
												<li>A zauna a gida abi umarnin hukuma a wuraren da aka bayar da umarnin hakan</li>
											</ul>
                                        </p>
                                        </p><div class="row">
                                            <button class="btn btn-dark col m-2" id="reload" >Dawo Farko</button>
                                        </div>
									</div>`;
				$('#main_pane').append(out);
			});
			
			
			$(document).on('click', '#is_sick', function(){
				$('#main_pane').html('');
				var yesOutput = `<div class='form-group m-2'>
										<h2 class='head-text'>Zabi rukunin shekaru</h2>
										<div class="row">
											<button class="btn btn-dark col m-2" id="zero_to_ten" >0 - 10</button>
										</div>
										<div class="row">
											<button class="btn btn-dark col m-2" id="twenty" >11 - 20</button>
										</div>
										<div class="row">
											<button class="btn btn-dark col m-2" id="thirty" >21 - 30</button>
										</div>
										<div class="row">
											<button class="btn btn-dark col m-2" id="fourty" >31 - 40</button>
										</div>
										<div class="row">
											<button class="btn btn-dark col m-2" id="fifty" >41 - 50</button>
										</div>
										<div class="row">
											<button class="btn btn-dark col m-2" id="sixty" >51 - 60</button>
										</div>
										<div class="row">
											<button class="btn btn-dark col m-2" id="more_than_sixty" >Sama da 60</button>
										</div>
									</div>`;
				$('#main_pane').append(yesOutput);
			});
					
			$(document).on('click', '#zero_to_ten', function(){
				document.cookie = "age_range=0_10;";
				$('#main_pane').html('');
				var out = `<div class='row'>
									<div class='col-lg-12'>
										<h2 class='head-text'>Zabi alamomin rashin lafiya da ake fuskanta</h2>
										<div class='form-group'>
												<label class='text-main' >
													<input type='checkbox' id='fever' style='width:30px;height:30px;' class='float-left'  />  
													<div class='float-left'> Zazzabi</div>
												</label>									
										</div>
										<div class='form-group'>
											<label class='text-main' >
												<input type='checkbox' id='tiredness' style='width:30px;height:30px;' class='float-left'  />  
												<div class='float-left'> Gajiya</div>
											</label>									
										</div>
										<div class='form-group'>
											<label class='text-main' >
												<input type='checkbox' id='dry_cough' style='width:30px;height:30px;' class='float-left'  />  
												<div class='float-left'> Tari wanda ba majina</div>
											</label>									
										</div>
										<div class='form-group'>
											<label class='text-main' >
												<input type='checkbox' id='no_disease_1' style='width:30px;height:30px;' class='float-left'  />  
												<div class='float-left'> Babu alamun cutata a nan</div>
											</label>									
										</div>

										<button class="btn btn-dark col m-2" id='next' >A Je Gaba</button>	
									</div>
								</div>`;
				$('#main_pane').append(out);
			});


			$(document).on('click', '#twenty', function(){
				document.cookie = "age_range=11_20;";
				$('#main_pane').html('');
				var out = `<div class='row'>
									<div class='col-lg-12'>
										<h2 class='head-text'>Zabi alamomin rashin lafiya da ake fuskanta</h2>
										<div class='form-group'>
												<label class='text-main' >
													<input type='checkbox' id='fever' style='width:30px;height:30px;' class='float-left'  />  
													<div class='float-left'> Zazzabi</div>
												</label>									
										</div>
										<div class='form-group'>
											<label class='text-main' >
												<input type='checkbox' id='tiredness' style='width:30px;height:30px;' class='float-left'  />  
												<div class='float-left'> Gajiya</div>
											</label>									
										</div>
										<div class='form-group'>
											<label class='text-main' >
												<input type='checkbox' id='dry_cough' style='width:30px;height:30px;' class='float-left'  />  
												<div class='float-left'> Tari wanda ba majina</div>
											</label>									
										</div>
										<div class='form-group'>
											<label class='text-main' >
												<input type='checkbox' id='no_disease_1' style='width:30px;height:30px;' class='float-left'  />  
												<div class='float-left'> Babu alamun cutata a nan</div>
											</label>									
										</div>

										<button class="btn btn-dark col m-2" id='next' >A Je Gaba</button>	
									</div>
								</div>`;
				$('#main_pane').append(out);
			});

			
			$(document).on('click', '#thirty', function(){
				document.cookie = "age_range=21_30;";
				$('#main_pane').html('');
				var out = `<div class='row'>
									<div class='col-lg-12'>
										<h2 class='head-text'>Zabi alamomin rashin lafiya da ake fuskanta</h2>
										<div class='form-group'>
												<label class='text-main' >
													<input type='checkbox' id='fever' style='width:30px;height:30px;' class='float-left'  />  
													<div class='float-left'> Zazzabi</div>
												</label>									
										</div>
										<div class='form-group'>
											<label class='text-main' >
												<input type='checkbox' id='tiredness' style='width:30px;height:30px;' class='float-left'  />  
												<div class='float-left'> Gajiya</div>
											</label>									
										</div>
										<div class='form-group'>
											<label class='text-main' >
												<input type='checkbox' id='dry_cough' style='width:30px;height:30px;' class='float-left'  />  
												<div class='float-left'> Tari wanda ba majina</div>
											</label>									
										</div>
										<div class='form-group'>
											<label class='text-main' >
												<input type='checkbox' id='no_disease_1' style='width:30px;height:30px;' class='float-left'  />  
												<div class='float-left'> Babu alamun cutata a nan</div>
											</label>									
										</div>

										<button class="btn btn-dark col m-2" id='next' >A Je Gaba</button>	
									</div>
								</div>`;
				$('#main_pane').append(out);
			});


			$(document).on('click', '#fourty', function(){
				document.cookie = "age_range=31_40;";
				$('#main_pane').html('');
				var out = `<div class='row'>
									<div class='col-lg-12'>
										<h2 class='head-text'>Zabi alamomin rashin lafiya da ake fuskanta</h2>
										<div class='form-group'>
												<label class='text-main' >
													<input type='checkbox' id='fever' style='width:30px;height:30px;' class='float-left'  />  
													<div class='float-left'> Zazzabi</div>
												</label>									
										</div>
										<div class='form-group'>
											<label class='text-main' >
												<input type='checkbox' id='tiredness' style='width:30px;height:30px;' class='float-left'  />  
												<div class='float-left'> Gajiya</div>
											</label>									
										</div>
										<div class='form-group'>
											<label class='text-main' >
												<input type='checkbox' id='dry_cough' style='width:30px;height:30px;' class='float-left'  />  
												<div class='float-left'> Tari wanda ba majina</div>
											</label>									
										</div>
										<div class='form-group'>
											<label class='text-main' >
												<input type='checkbox' id='no_disease_1' style='width:30px;height:30px;' class='float-left'  />  
												<div class='float-left'> Babu alamun cutata a nan</div>
											</label>									
										</div>

										<button class="btn btn-dark col m-2" id='next' >A Je Gaba</button>	
									</div>
								</div>`;
				$('#main_pane').append(out);
			});


			$(document).on('click', '#fifty', function(){
				document.cookie = "age_range=41_50;";
				$('#main_pane').html('');
				var out = `<div class='row'>
									<div class='col-lg-12'>
										<h2 class='head-text'>Zabi alamomin rashin lafiya da ake fuskanta</h2>
										<div class='form-group'>
												<label class='text-main' >
													<input type='checkbox' id='fever' style='width:30px;height:30px;' class='float-left'  />  
													<div class='float-left'> Zazzabi</div>
												</label>									
										</div>
										<div class='form-group'>
											<label class='text-main' >
												<input type='checkbox' id='tiredness' style='width:30px;height:30px;' class='float-left'  />  
												<div class='float-left'> Gajiya</div>
											</label>									
										</div>
										<div class='form-group'>
											<label class='text-main' >
												<input type='checkbox' id='dry_cough' style='width:30px;height:30px;' class='float-left'  />  
												<div class='float-left'> Tari wanda ba majina</div>
											</label>									
										</div>
										<div class='form-group'>
											<label class='text-main' >
												<input type='checkbox' id='no_disease_1' style='width:30px;height:30px;' class='float-left'  />  
												<div class='float-left'> Babu alamun cutata a nan</div>
											</label>									
										</div>

										<button class="btn btn-dark col m-2" id='next' >A Je Gaba</button>	
									</div>
								</div>`;
				$('#main_pane').append(out);
			});



			$(document).on('click', '#sixty', function(){
				document.cookie = "age_range=51_60;";
				$('#main_pane').html('');
				var out = `<div class='row'>
									<div class='col-lg-12'>
										<h2 class='head-text'>Zabi alamomin rashin lafiya da ake fuskanta</h2>
										<div class='form-group'>
												<label class='text-main' >
													<input type='checkbox' id='fever' style='width:30px;height:30px;' class='float-left'  />  
													<div class='float-left'> Zazzabi</div>
												</label>									
										</div>
										<div class='form-group'>
											<label class='text-main' >
												<input type='checkbox' id='tiredness' style='width:30px;height:30px;' class='float-left'  />  
												<div class='float-left'> Gajiya</div>
											</label>									
										</div>
										<div class='form-group'>
											<label class='text-main' >
												<input type='checkbox' id='dry_cough' style='width:30px;height:30px;' class='float-left'  />  
												<div class='float-left'> Tari wanda ba majina</div>
											</label>									
										</div>
										<div class='form-group'>
											<label class='text-main' >
												<input type='checkbox' id='no_disease_1' style='width:30px;height:30px;' class='float-left'  />  
												<div class='float-left'> Babu alamun cutata a nan</div>
											</label>									
										</div>

										<button class="btn btn-dark col m-2" id='next' >A Je Gaba</button>	
									</div>
								</div>`;
				$('#main_pane').append(out);
			});


			$(document).on('click', '#more_than_sixty', function(){
				document.cookie = "age_range=61_more;";
				$('#main_pane').html('');
				var out = `<div class='row'>
									<div class='col-lg-12'>
										<h2 class='head-text'>Zabi alamomin rashin lafiya da ake fuskanta</h2>
										<div class='form-group'>
												<label class='text-main' >
													<input type='checkbox' id='fever' style='width:30px;height:30px;' class='float-left'  />  
													<div class='float-left'> Zazzabi</div>
												</label>									
										</div>
										<div class='form-group'>
											<label class='text-main' >
												<input type='checkbox' id='tiredness' style='width:30px;height:30px;' class='float-left'  />  
												<div class='float-left'> Gajiya</div>
											</label>									
										</div>
										<div class='form-group'>
											<label class='text-main' >
												<input type='checkbox' id='dry_cough' style='width:30px;height:30px;' class='float-left'  />  
												<div class='float-left'> Tari wanda ba majina</div>
											</label>									
										</div>
										<div class='form-group'>
											<label class='text-main' >
												<input type='checkbox' id='no_disease_1' style='width:30px;height:30px;' class='float-left'  />  
												<div class='float-left'> Babu alamun cutata a nan</div>
											</label>									
										</div>

										<button class="btn btn-dark col m-2" id='next' >A Je Gaba</button>	
									</div>
								</div>`;
				$('#main_pane').append(out);
			});



			$(document).on('click', '#next', function(){
				if(document.getElementById('fever').checked){
					document.cookie = "has_fever=yes;";
				}

				if(document.getElementById('tiredness').checked){
					document.cookie = "has_tiredness=yes;";
				}

				if(document.getElementById('dry_cough').checked){
					document.cookie = "has_dry_cough=yes;";
				}

				if(document.getElementById('no_disease_1').checked){
					document.cookie = "no_disease_1=yes;";
				}

				$('#main_pane').html('');
				var out = `<div class='row'>
					<div class='col-lg-12'>
						<h2 class='head-text'>Bayan alamomin da aka zaba a baya, akwai kuma wasu alamomin
							 a cikin wadannan?</h2>
						<div class='form-group'>
								<label class='text-main' >
									<input type='checkbox' id='breathing_problem' style='width:30px;height:30px;' class='float-left'  />  
									<div class='float-left'> Numfashi sama sama</div>
								</label>									
						</div>
						<div class='form-group'>
							<label class='text-main' >
								<input type='checkbox' id='sore_throat' style='width:30px;height:30px;' class='float-left'  />  
								<div class='float-left'> Ciwon Makwogwaro</div>
							</label>									
						</div>
						<div class='form-group'>
							<label class='text-main' >
								<input type='checkbox' id='pain_and_aches' style='width:30px;height:30px;' class='float-left'  />  
								<div class='float-left'> Ciwon gabobi</div>
							</label>									
						</div>
						<div class='form-group'>
							<label class='text-main' >
								<input type='checkbox' id='no_disease_2' style='width:30px;height:30px;' class='float-left'  />  
								<div class='float-left'> Babu alamun cutata a nan</div>
							</label>									
						</div>

						<button class="btn btn-dark col m-2" id='next2' >A Je Gaba</button>			
					</div>
				</div>`;
				$('#main_pane').append(out);
			});


			$(document).on('click', '#next2', function(){
				if(document.getElementById('breathing_problem').checked){
					document.cookie = "breathing_problem=yes;";
				}

				if(document.getElementById('sore_throat').checked){
					document.cookie = "sore_throat=yes;";
				}

				if(document.getElementById('pain_and_aches').checked){
					document.cookie = "pain_and_aches=yes;";
				}

				if(document.getElementById('no_disease_2').checked){
					document.cookie = "no_disease_2=yes;";
				}

				$('#main_pane').html('');
				var out = `<div class='form-group m-2'>
					<h2 class='head-text'>A cikin mako biyu da suka wuce, anyi mu'amala da wanda aka tabbatar yana dauke da cutar coronavirus,
						 ko kuma anje wani wuri ko gida da cutar ta bulla?
						</h2>
					<div class="row">
						<button class="btn btn-dark col m-2" id="travelled" >Eh</button>
						<button class="btn btn-dark col m-2" id="not_travelled" >A'a</button>
					</div>
				</div>`;
				$('#main_pane').append(out);
			});

			
			/* $(document).on('click', '#fever', function(){

				$("#no_disease_1").attr("disabled", true);
			}); */

			$(document).on('change', '#fever',function (){
				if(this.checked){
					if(!document.getElementById('no_disease_1').checked){
						$("#no_disease_1").attr("disabled", true);
					}
				}else{
					if(document.getElementById('no_disease_1').disabled && !document.getElementById('tiredness').checked && !document.getElementById('dry_cough').checked ){
						$("#no_disease_1").removeAttr("disabled");
					}
				}
			}).trigger('change');
			
			$(document).on('change', '#tiredness',function (){
				if(this.checked){
					if(!document.getElementById('no_disease_1').checked){
						$("#no_disease_1").attr("disabled", true);
					}
				}else{
					if(document.getElementById('no_disease_1').disabled && !document.getElementById('fever').checked && !document.getElementById('dry_cough').checked ){
						$("#no_disease_1").removeAttr("disabled");
					}
				}
			}).trigger('change');

			$(document).on('change', '#dry_cough',function (){
				if(this.checked){
					if(!document.getElementById('no_disease_1').checked){
						$("#no_disease_1").attr("disabled", true);
					}
				}else{
					if(document.getElementById('no_disease_1').disabled && !document.getElementById('tiredness').checked && !document.getElementById('fever').checked ){
						$("#no_disease_1").removeAttr("disabled");
					}
				}
			}).trigger('change');

			$(document).on('change', '#no_disease_1',function (){
				if(this.checked){
					$("#fever").attr("disabled", true);
					$("#tiredness").attr("disabled", true);
					$("#dry_cough").attr("disabled", true);
				}else{
					$("#fever").removeAttr("disabled");
					$("#tiredness").removeAttr("disabled");
					$("#dry_cough").removeAttr("disabled");
				}
			}).trigger('change');

			/* ******************************************

			*********************************************** */
			$(document).on('change', '#breathing_problem',function (){
				if(this.checked){
					if(!document.getElementById('no_disease_2').checked){
						$("#no_disease_2").attr("disabled", true);
					}
				}else{
					if(document.getElementById('no_disease_2').disabled && !document.getElementById('sore_throat').checked && !document.getElementById('pain_and_aches').checked ){
						$("#no_disease_2").removeAttr("disabled");
					}
				}
			}).trigger('change');
			
			$(document).on('change', '#sore_throat',function (){
				if(this.checked){
					if(!document.getElementById('no_disease_2').checked){
						$("#no_disease_2").attr("disabled", true);
					}
				}else{
					if(document.getElementById('no_disease_2').disabled && !document.getElementById('breathing_problem').checked && !document.getElementById('pain_and_aches').checked ){
						$("#no_disease_2").removeAttr("disabled");
					}
				}
			}).trigger('change');

			$(document).on('change', '#pain_and_aches',function (){
				if(this.checked){
					if(!document.getElementById('no_disease_2').checked){
						$("#no_disease_2").attr("disabled", true);
					}
				}else{
					if(document.getElementById('no_disease_2').disabled && !document.getElementById('breathing_problem').checked && !document.getElementById('sore_throat').checked ){
						$("#no_disease_2").removeAttr("disabled");
					}
				}
			}).trigger('change');

			$(document).on('change', '#no_disease_2',function (){
				if(this.checked){
					$("#breathing_problem").attr("disabled", true);
					$("#sore_throat").attr("disabled", true);
					$("#pain_and_aches").attr("disabled", true);
				}else{
					$("#breathing_problem").removeAttr("disabled");
					$("#sore_throat").removeAttr("disabled");
					$("#pain_and_aches").removeAttr("disabled");
				}
			}).trigger('change');


			$(document).on('click', '#travelled', function(){
				
				var cookies = document.cookie.split(";");

				/* for (var i = 0; i < cookies.length; i++) {
					var cookie = cookies[i];
					var eqPos = cookie.indexOf("=");
					var name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
					document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
				} */

				allcookies = document.cookie;

				$('#main_pane').html('');

				var out = '';

				var young, adult, old, has_fever, has_tiredness, has_dry_cough, breathing_problem, sore_throat, pain_and_aches, no_disease_1, no_disease_2, 

				cookiearray = allcookies.split(';');
				// Now take key value pair out of this array
				for(var i=0; i<cookiearray.length; i++){
					name = cookiearray[i].split('=')[0];
					value = cookiearray[i].split('=')[1];
					//alert(name+" = "+value);
					name = name.trim();
					value = value.trim();
					

					if(value == "0_10" || value == "11_20"){
						young = true;
					}

					if(value == "21_30" || value == "31_40" || value == "41_50"){
						adult = true;
					}

					if(value == "51_60" || value == "61_more"){
						old = true;
					}

					
					if(name == "has_fever" && value == "yes"){
						has_fever = true;
					}

					if(name == "has_tiredness" && value == "yes"){
						has_tiredness = true;
					}

					if(name == "has_dry_cough" && value == "yes"){
						has_dry_cough = true;
					}

					if(name == "no_disease_1" && value == "yes"){
						no_disease_1 = true;
					}

					if(name == "no_disease_1" && value == "yes"){
						no_disease_1 = true;	
					}

					if(name == "no_disease_2" && value == "yes"){
						no_disease_2 = true;
					}

					if(name == "breathing_problem" && value == "yes"){
						breathing_problem = true;
					}

					if(name == "sore_throat" && value == "yes"){
						sore_throat = true;
					}

					if(name == "pain_and_aches" && value == "yes"){
						pain_and_aches = true;
					}			
				}


				if(has_fever){
					out = `<div class='form-group m-2'>
							<p class='text-main text-justify'> 
								Ba mamaki ana dauke da wannan cuta ta coronavirus ko akasin haka<br>
								Ayi kokarin killace kai a guji mu'amala da yin nesa da mutane har na tsawon sati biyu (2),
								 idan rashin lafiya ya kara tsanani ko aka samu karuwar alamomin wannan cuta ayi kokarin kiran hukomomi.
							</p>
							<div class="row">
								<button class="btn btn-dark col m-2" id="reload" >Dawo Farko</button>
							</div>
						</div>`;
				}

				if(has_tiredness){
					out = `<div class='form-group m-2'>
							<p class='text-main text-justify'> 
								Ba mamaki ana dauke da wannan cuta ta coronavirus ko akasin haka<br>
								Ayi kokarin killace kai a guji mu'amala da yin nesa da mutane har na tsawon sati biyu (2),
								 idan rashin lafiya ya kara tsanani ko aka samu karuwar alamomin wannan cuta ayi kokarin kiran hukomomi.
							</p>
							<div class="row">
								<button class="btn btn-dark col m-2" id="reload" >Dawo Farko</button>
							</div>
						</div>`;
				}

				if(has_dry_cough){
					out = `<div class='form-group m-2'>
							<p class='text-main text-justify'> 
								Ba mamaki ana dauke da wannan cuta ta coronavirus ko akasin haka<br>
								Ayi kokarin killace kai a guji mu'amala da yin nesa da mutane har na tsawon sati biyu (2),
								 idan rashin lafiya ya kara tsanani ko aka samu karuwar alamomin wannan cuta ayi kokarin kiran hukomomi.
							</p>
							<div class="row">
								<button class="btn btn-dark col m-2" id="reload" >Dawo Farko</button>
							</div>
						</div>`;
				}

				if(breathing_problem){
					out = `<div class='form-group m-2'>
							<p class='text-main text-justify'> 
								Ba mamaki ana dauke da wannan cuta ta coronavirus ko akasin haka<br>
								Ayi kokarin killace kai a guji mu'amala da yin nesa da mutane har na tsawon sati biyu (2),
								 idan rashin lafiya ya kara tsanani ko aka samu karuwar alamomin wannan cuta ayi kokarin kiran hukomomi.
							</p>
							<div class="row">
								<button class="btn btn-dark col m-2" id="reload" >Dawo Farko</button>
							</div>
						</div>`;
				}

				if(sore_throat){
					out = `<div class='form-group m-2'>
							<p class='text-main text-justify'> 
								Ba mamaki ana dauke da wannan cuta ta coronavirus ko akasin haka<br>
								Ayi kokarin killace kai a guji mu'amala da yin nesa da mutane har na tsawon sati biyu (2),
								 idan rashin lafiya ya kara tsanani ko aka samu karuwar alamomin wannan cuta ayi kokarin kiran hukomomi.
							</p>
							<div class="row">
								<button class="btn btn-dark col m-2" id="reload" >Dawo Farko</button>
							</div>
						</div>`;
				}

				if(pain_and_aches){
					out = `<div class='form-group m-2'>
							<p class='text-main text-justify'> 
								Ba mamaki ana dauke da wannan cuta ta coronavirus ko akasin haka<br>
								Ayi kokarin killace kai a guji mu'amala da yin nesa da mutane har na tsawon sati biyu (2),
								 idan rashin lafiya ya kara tsanani ko aka samu karuwar alamomin wannan cuta ayi kokarin kiran hukomomi.
							</p>
						</div>`;
				}

				if(breathing_problem && old){
					out = `<div class='form-group m-2'>
							<p class='text-main text-justify'> 
								Ba mamaki ana dauke da wannan cuta ta coronavirus ko akasin haka. <br>
								Kowa yana cikin hadarin kamuwa da wannan cuta ta coronavirus, amma abin yafi tsanani ga wadanda suka fara manyanta, 
								Saboda haka dole a lura sosai.<br>
								Ayi kokarin killace kai a guji mu'amala da yin nesa da mutane har na tsawon sati biyu (2),
								 idan rashin lafiya ya kara tsanani ko aka samu karuwar alamomin wannan cuta ayi kokarin kiran hukomomi.
							</p>
							<div class="row">
								<button class="btn btn-dark col m-2" id="reload" >Dawo Farko</button>
							</div>
						</div>`;
				}

				if(no_disease_1 && no_disease_2){
					out = `<div class='form-group m-2'>
							<p class='text-main text-justify'> 
								Ba'a da wasu alamu na coronavirus, amma kasancewar anje wajen da wannan cuta tai kamari
								ko kuma anyi mu'amala da wanda aka tabbatar yana da wannan cutar. <br>
								Wannan manhaja nada shawarar killace kai na tsawon sati biyu(2), dole ne a guji ko wacve
								irin hukda da mutane na tsawon wannan lokaci. Ana kuma jin wasu alamu na rashin lafiya a gaggauta sanar da hukumar da abin ya dace.
							</p>
							<div class="row">
								<button class="btn btn-dark col m-2" id="reload" >Dawo Farko</button>
							</div>
						</div>`;
                }
                
                if(has_fever && has_tiredness && has_dry_cough){
					out = `<div class='form-group m-2'>
							<p class='text-main text-justify'> 
                                Alamomi na nunawa ana dauke da wannan cuta ta coronavirus<br>
                                Ayi kokarin killace kai da saurin kiran hukuma domin sanin mataki na gaba.
							</p>
							<div class="row">
								<button class="btn btn-dark col m-2" id="reload" >Dawo Farko</button>
							</div>
							</div>`;
                }
                
                if(breathing_problem && sore_throat && pain_and_aches){
					out = `<div class='form-group m-2'>
							<p class='text-main text-justify'> 
                                Alamomi na nunawa ana dauke da wannan cuta ta coronavirus<br>
                                Ayi kokarin killace kai da saurin kiran hukuma domin sanin mataki na gaba.
							</p>
							<div class="row">
								<button class="btn btn-dark col m-2" id="reload" >Dawo Farko</button>
							</div>
							</div>`;
                }
                
                if(has_fever && has_tiredness && has_dry_cough && breathing_problem && sore_throat){
					out = `<div class='form-group m-2'>
							<p class='text-main text-justify'> 
								Da akwai alamomi masu karfi na cewar ana dauke da wannan cuta ta coronavirus.<br>
								Ayi gaggawar kiran hukumomi
							</p>
							<div class="row">
								<button class="btn btn-dark col m-2" id="reload" >Dawo Farko</button>
							</div>
							</div>`;
                }
                
                if(has_fever && has_dry_cough && breathing_problem && sore_throat){
					out = `<div class='form-group m-2'>
							<p class='text-main text-justify'> 
								Da akwai alamomi masu karfi na cewar ana dauke da wannan cuta ta coronavirus.<br>
								Ayi gaggawar kiran hukumomi
							</p>
							<div class="row">
								<button class="btn btn-dark col m-2" id="reload" >Dawo Farko</button>
							</div>
							</div>`;
				}

				if(has_fever && has_tiredness && has_dry_cough && breathing_problem && sore_throat && pain_and_aches){
					out = `<div class='form-group m-2'>
							<p class='text-main text-justify'> 
								Da akwai alamomi masu karfi na cewar ana dauke da wannan cuta ta coronavirus.<br>
								Ayi gaggawar kiran hukumomi
							</p>
							<div class="row">
								<button class="btn btn-dark col m-2" id="reload" >Dawo Farko</button>
							</div>
							</div>`;
				}

				$('#main_pane').append(out);

				for (var i = 0; i < cookies.length; i++) {
					var cookie = cookies[i];
					var eqPos = cookie.indexOf("=");
					var name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
					document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
				}

			});


			$(document).on('click', '#not_travelled', function(){
				
				var cookies = document.cookie.split(";");

				/* for (var i = 0; i < cookies.length; i++) {
					var cookie = cookies[i];
					var eqPos = cookie.indexOf("=");
					var name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
					document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
				} */

				allcookies = document.cookie;

				$('#main_pane').html('');

				var out = '';

				var young, adult, old, has_fever, has_tiredness, has_dry_cough, breathing_problem, sore_throat, pain_and_aches, no_disease_1, no_disease_2, 

				cookiearray = allcookies.split(';');
				// Now take key value pair out of this array
				for(var i=0; i<cookiearray.length; i++){
					name = cookiearray[i].split('=')[0];
					value = cookiearray[i].split('=')[1];
					//alert(name+" = "+value);
					name = name.trim();
					value = value.trim();
					

					if(value == "0_10" || value == "11_20"){
						young = true;
					}

					if(value == "21_30" || value == "31_40" || value == "41_50"){
						adult = true;
					}

					if(value == "51_60" || value == "61_more"){
						old = true;
					}

					
					if(name == "has_fever" && value == "yes"){
						has_fever = true;
					}

					if(name == "has_tiredness" && value == "yes"){
						has_tiredness = true;
					}

					if(name == "has_dry_cough" && value == "yes"){
						has_dry_cough = true;
					}

					if(name == "no_disease_1" && value == "yes"){
						no_disease_1 = true;
					}

					if(name == "no_disease_1" && value == "yes"){
						no_disease_1 = true;	
					}

					if(name == "no_disease_2" && value == "yes"){
						no_disease_2 = true;
					}

					if(name == "breathing_problem" && value == "yes"){
						breathing_problem = true;
					}

					if(name == "sore_throat" && value == "yes"){
						sore_throat = true;
					}

					if(name == "pain_and_aches" && value == "yes"){
						pain_and_aches = true;
					}			
				}


				if(has_fever){
					out = `<div class='form-group m-2'>
							<p class='text-main text-justify'> 
								Ba mamaki ana dauke da wannan cuta ta coronavirus ko akasin haka<br>
								Ayi kokarin killace kai a guji mu'amala da yin nesa da mutane har na tsawon sati biyu (2),
								 idan rashin lafiya ya kara tsanani ko aka samu karuwar alamomin wannan cuta ayi kokarin kiran hukomomi.
							</p>
							<div class="row">
								<button class="btn btn-dark col m-2" id="reload" >Dawo Farko</button>
							</div>
						</div>`;
				}

				if(has_tiredness){
					out = `<div class='form-group m-2'>
							<p class='text-main text-justify'> 
								Ba mamaki ana dauke da wannan cuta ta coronavirus ko akasin haka<br>
								Ayi kokarin killace kai a guji mu'amala da yin nesa da mutane har na tsawon sati biyu (2),
								 idan rashin lafiya ya kara tsanani ko aka samu karuwar alamomin wannan cuta ayi kokarin kiran hukomomi.
							</p>
							<div class="row">
								<button class="btn btn-dark col m-2" id="reload" >Dawo Farko</button>
							</div>
						</div>`;
				}

				if(has_dry_cough){
					out = `<div class='form-group m-2'>
							<p class='text-main text-justify'> 
								Ba mamaki ana dauke da wannan cuta ta coronavirus ko akasin haka<br>
								Ayi kokarin killace kai a guji mu'amala da yin nesa da mutane har na tsawon sati biyu (2),
								 idan rashin lafiya ya kara tsanani ko aka samu karuwar alamomin wannan cuta ayi kokarin kiran hukomomi.
							</p>
							<div class="row">
								<button class="btn btn-dark col m-2" id="reload" >Dawo Farko</button>
							</div>
						</div>`;
				}

				if(breathing_problem){
					out = `<div class='form-group m-2'>
							<p class='text-main text-justify'> 
								Ba mamaki ana dauke da wannan cuta ta coronavirus ko akasin haka<br>
								Ayi kokarin killace kai a guji mu'amala da yin nesa da mutane har na tsawon sati biyu (2),
								 idan rashin lafiya ya kara tsanani ko aka samu karuwar alamomin wannan cuta ayi kokarin kiran hukomomi.
							</p>
							<div class="row">
								<button class="btn btn-dark col m-2" id="reload" >Dawo Farko</button>
							</div>
						</div>`;
				}

				if(sore_throat){
					out = `<div class='form-group m-2'>
							<p class='text-main text-justify'> 
								Ba mamaki ana dauke da wannan cuta ta coronavirus ko akasin haka<br>
								Ayi kokarin killace kai a guji mu'amala da yin nesa da mutane har na tsawon sati biyu (2),
								 idan rashin lafiya ya kara tsanani ko aka samu karuwar alamomin wannan cuta ayi kokarin kiran hukomomi.
							</p>
							<div class="row">
								<button class="btn btn-dark col m-2" id="reload" >Dawo Farko</button>
							</div>
						</div>`;
				}

				if(pain_and_aches){
					out = `<div class='form-group m-2'>
							<p class='text-main text-justify'> 
								Ba mamaki ana dauke da wannan cuta ta coronavirus ko akasin haka<br>
								Ayi kokarin killace kai a guji mu'amala da yin nesa da mutane har na tsawon sati biyu (2),
								 idan rashin lafiya ya kara tsanani ko aka samu karuwar alamomin wannan cuta ayi kokarin kiran hukomomi.
							</p>
							<div class="row">
								<button class="btn btn-dark col m-2" id="reload" >Dawo Farko</button>
							</div>
						</div>`;
				}

				if(breathing_problem && old){
					out = `<div class='form-group m-2'>
							<p class='text-main text-justify'> 
								Ba mamaki ana dauke da wannan cuta ta coronavirus ko akasin haka. <br>
								Kowa yana cikin hadarin kamuwa da wannan cuta ta coronavirus, amma abin yafi tsanani ga wadanda suka fara manyanta, 
								Saboda haka dole a lura sosai.<br>
								Ayi kokarin killace kai a guji mu'amala da yin nesa da mutane har na tsawon sati biyu (2),
								 idan rashin lafiya ya kara tsanani ko aka samu karuwar alamomin wannan cuta ayi kokarin kiran hukomomi.
							</p>
							<div class="row">
								<button class="btn btn-dark col m-2" id="reload" >Dawo Farko</button>
							</div>
						</div>`;
				}

				if(no_disease_1 && no_disease_2){
					out = `<div class='form-group m-2'>
							<p class='text-main text-justify'> 
								Ba'a da wasu alamu na coronavirus, kuma rashin mu'amala da masu dauke da cutar ko zuwa 
								wajen da cutar tai kamari yasa akwai zato me kyau na cewa ba'a dauke da wannan cuta. <br>
								
									Kada a manta da hanyoyin kariya na wannan cuta
									<ul class='text-main'>
										<li>Wanke hannu akai-akai</li>
										<li>Bayar da tazara</li>
										<li>Rufe Hanci da baki da gwiwar hannu a lokacin da akeyin tari ko atishawa</li>
										<li>A zauna a gida abi umarnin hukuma a wuraren da aka bayar da umarnin hakan</li>
									</ul>
								
							</p><div class="row">
								<button class="btn btn-dark col m-2" id="reload" >Dawo Farko</button>
							</div>
						</div>`;
				}

				if(has_fever && has_tiredness && has_dry_cough && breathing_problem && sore_throat && pain_and_aches){
					out = `<div class='form-group m-2'>
							<p class='text-main text-justify'> 
								Da akwai alamomi masu karfi na cewar ana dauke da wannan cuta ta coronavirus.<br>
								Ayi gaggawar kiran hukumomi
							</p>
							<div class="row">
								<button class="btn btn-dark col m-2" id="reload" >Dawo Farko</button>
							</div>
							</div>`;
				}

				$('#main_pane').append(out);

				for (var i = 0; i < cookies.length; i++) {
					var cookie = cookies[i];
					var eqPos = cookie.indexOf("=");
					var name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
					document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
				}

			});

			$(document).on('click', '#reload', function(){
				location.reload(true);
			});