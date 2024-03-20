import "../styles/contact.css"
import map from "../images/CarteFichier_40.png"

function Contact() {

	return (
		<div class="contact">
			<h2>NOS HORAIRES</h2>
			<table class="contact_table">
				<tbody>
					<tr class="table_border">					
						<th scope="row"> </th>
						<td>Lundi</td>
						<td>Mardi</td>
						<td>Mercredi</td>
						<td>Jeudi</td>
						<td>Vendredi</td>
						<td>Samedi</td>
						<td>Dimanche</td>						
					</tr>
					<tr class="table_border">
						<th scope="row">Matin</th>
						<td>7H30 - 12H30</td>
						<td>7H30 - 12H30</td>
						<td>FERME</td>
						<td>7H30 - 12H30</td>
						<td>7H30 - 12H30</td>
						<td>7H30 - 12H30</td>
						<td>FERME</td>					
					</tr>
					<tr>
						<th scope="row">Après-midi</th>
						<td>14H - 17H</td>
						<td>FERME</td>
						<td>FERME</td>
						<td>14H - 17H</td>
						<td>14H - 17H</td>
						<td>13H30 - 16H30</td>
						<td>FERME</td>
					</tr>
					</tbody>
			</table>

			<h2>ZONE GEOGRAPHIQUE & CONTACT</h2>
			<div>
				<img src={map} alt="carte de la zone géographique d'action" />
				<h3>Architecte d’intérieur</h3>
				<p>Particuliers & professionnels</p>
				<p>07 67 31 93 29</p>
				<p>joie.de.vivre.design.global@gmail.com</p>
				<p>Déplacement dans tout le Finistère.</p>
				<p>Prise de rendez-vous par téléphone ou sur le site internet</p>
			</div>
		</div>
	)
}

export default Contact