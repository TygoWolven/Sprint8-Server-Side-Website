// Importeer het npm pakket express uit de node_modules map
import express from 'express'

// Importeer de zelfgemaakte functie fetchJson uit de ./helpers map
import fetchJson from './helpers/fetch-json.js'

<<<<<<< Updated upstream
=======
// Stel het basis endpoint in
const apiUrl = 'https://fdnd.directus.app/items'

>>>>>>> Stashed changes
// Maak een nieuwe express app aan
const app = express()

// Stel ejs in als template engine
app.set('view engine', 'ejs')

// Stel de map met ejs templates in
app.set('views', './views')

<<<<<<< Updated upstream
// Gebruik de map 'public' voor statische resources, zoals stylesheets, afbeeldingen en client-side JavaScript
app.use(express.static('public'))

// Zorg dat werken met request data makkelijker wordt
app.use(express.urlencoded({extended: true}))

// TODO: routes voor deze pizza applicatie..

app.get('/', function(request, response) {
	response.render('index')
})

app.get('/contact', function(request, response) {
	response.render('contact')
})

app.get('/contact', function(request, response) {

	fetchJson('https://fdnd-agency.directus.app/admin/content/dh_services').then((pizzasDataUitDeAPI) => {
		response.render('contact', {pizzas: pizzasDataUitDeAPI.data})
	});
	
})

// app.get('/pizzas/:pizza', function(request, response) {
// 	fetchJson('https://fdnd-agency.directus.app/items/demo_pizzas?filter={"id":' + request.params.pizza + '}').then((pizzaDetail) => {
// 		response.render('pizza', {pizza: pizzaDetail.data[0]})
// 	})
// })






// Poortnummer voor de LocalHost
app.set('port', process.env.PORT || 8000)

// Start express op, haal daarbij het zojuist ingestelde poortnummer op
app.listen(app.get('port'), function() {
=======
// Werken met request data wordt hiermee makkelijker
app.use(express.urlencoded({extended: true}))

// Gebruik de map 'public' voor statische resources, zoals stylesheets, afbeeldingen en client-side JavaScript
app.use(express.static('public'))

// Maak een GET route voor de index
app.get('/', function (request, response) {
    // Haal alle personen uit de WHOIS API op
    fetchJson(apiUrl + '/person').then((apiData) => {
      // apiData bevat gegevens van alle personen uit alle squads
      // Je zou dat hier kunnen filteren, sorteren, of zelfs aanpassen, voordat je het doorgeeft aan de view
  
      // Render index.ejs uit de views map en geef de opgehaalde data mee als variabele, genaamd persons
      response.render('index', {

      })
    })
  })

// Maak een POST route voor de index
app.post('/', function (request, response) { 
    response.redirect(303, '/')
})

// Stel het poortnummer in waar express op moet gaan luisteren
app.set('port', process.env.PORT || 8000)

// Start express op, haal daarbij het zojuist ingestelde poortnummer op
app.listen(app.get('port'), function () {
>>>>>>> Stashed changes
  // Toon een bericht in de console en geef het poortnummer door
  console.log(`Application started on http://localhost:${app.get('port')}`)
})