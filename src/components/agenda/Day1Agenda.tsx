import SessionCard from "./SessionCard";

const Day1Agenda = () => {
  return (
    <div className="space-y-6">
      {/* ✅ NEW CARD */}
      <SessionCard time="08:30" title="Accueil & Enregistrement" isBreak />

      <SessionCard
        time="09:00"
        title="Discours d'ouverture"
        hideSpeakersLabel
        speakers={[
          { name: "Adama Lam", role: "Président de la CNES" },       
          { name: "Katja Roeckel", role: "Directrice Résidente de la GIZ au Sénégal" },
          { name: "Jonathan Nowak", role: "Représentant Résident de la KAS Sénégal" },
{
  name: "Kai Baldow",
  role: "Ambassadeur d'Allemagne au Sénégal (TBC)"
},             { name: "Rachid Saidani", role: "Ambassadeur de Tunisie au Sénégal" },





          { name: "Fatma Thabet Chiboub", role: "Ministre de l'Industrie, de l'Énergie et des Mines de Tunisie (Tbc)" },

          // ✅ Fatma moved here (END) and will be centered in UI
          {
            name: "Amina Magouri",
            role: "Présidente de Salma Dialogue",
            isKeynote: true,
          },
        ]}
      />

      <SessionCard
        time="09:35"
        title="Ouverture officielle & Présentation de la politique industrielle et commerciale du Sénégal"
        speakers={[
          {
            name: "Dr. Serigne Gueye Diop",
            role: "Ministre de l'Industrie et du Commerce du Sénégal",
          },
        ]}
        hideSpeakersLabel
      />

      <SessionCard time="10:00" title="Photo de groupe" isBreak />

      <SessionCard
        time="10:15"
        title="Session inaugurale : Cadres politiques incitants et coopération Sud-Sud & Triangulaire : Moteurs de la transformation économique en Afrique"
        description="Cette session de haut niveau mettra en lumière la coopération institutionnelle et économique entre les régions du Sud, mettant l'accent sur l'industrialisation, la résilience économique et la création d'emplois durables."
        speakers={[
          {
            name: "Fatma Thabet Chiboub",
            role: "Ministre de l'Industrie, des Mines et de l'Energie de Tunisie",
            isKeynote: true,
          },
          { name: "Bakary Séga Bathily", role: "Directeur Général de l'Agenence pour la Promotion de l'investissement et des Grands Traveaux du Sénégal" },
          {
            name: "Pamela Mbabazi",
            role: "Présidente exécutive de l'Autorité nationale de planification de l'Ouganda",
          },
          { name: "Alexander Knipperts", role: "Fédération des Industries Allemandes, BDI" },
        ]}
        moderator={{
          name: "Fatou Sagna Sow",
          role: "Conseiller technique du Ministre de l'Industrie et du Commerce du Sénégal",
        }}
      />

      <SessionCard time="12:30" title="Déjeuner" isBreak />

      <SessionCard
        time="13:30"
        title="Session 1 : Industrialisation durable : Structurer des chaînes de valeur africaines pour une meilleure intégration globale"
        description="Cette session examinera les stratégies de développement industriel à haute valeur ajoutée axées sur le secteur automobile et la mobilité durable,, comme vecteurs de
transformation économique , de transfert technologique et de création d’emplois
qualifiés entre l’Allemagne et l’Afrique . "
        speakers={[
          { name: "Sabri Brahem", role: "Membre du CoDir de la Tunisian Automotive Association (TAA)", isKeynote: true },
          { name: "Akrem Saadaoui", role: "Directeur du Bureau pour l’Afrique du Nord, AAAM" },
          { name: "Marius Ochel", role: "Directeur des partenariats avec les associations internationales pour l'Afrique et l'Inde,VdA" },
          { name: "Allan Muhumuza", role: "Chef du Bureau de la mobilité au Secrétariat à la technologie et à l'innovation de l'Ouganda" },
          { name: "Martin Birkner", role: "Chef de la division NSO Business Strategy, Région Afrique Subsaharienne, Volkswagen Afrique" },
          { name: "Babacar Gueye", role: "Directeur Général de EMG Universal Auto" },
        ]}
        moderator={{
          name: "Tourad Aidara",
          role: "Directeur des Opérations, des appuis techniques et de la Promotion du SRE, Ministère de l'Industrie et du Commerce du Sénégal",
        }}
      />

      <SessionCard time="15:00" title="Pause-café" isBreak />

      <SessionCard
        time="15:30"
        title="Session 2 : Innovation en Agribusiness et Biotech"
        description="Cette session explorera les leviers de modernisation du secteur agricole et agro-industriel."
        speakers={[
          { name: "Aïssatou Ndiaye", role: "Coordinatrice Générale PNDAS", isKeynote: true },
          { name: "Kassim El Sahili", role: "Fondateur – IBS" },
          { name: "Tidjane Dème", role: "General Partner – Partech Africa" },
          { name: "Cosmas Mwikirize", role: "Secrétariat Technologie & Innovation – Ouganda" },
          { name: "Olfa Kelani", role: "PDG Kyto-Prod" },
          { name: "Yosra Tahri", role: "PDG PHYTOPRO" },
        ]}
        moderator={{
          name: "Youssef Trifa",
          role: "Professeur – INAT Tunisie",
        }}
      />

      <SessionCard time="17:00" title="Clôture de la première journée" isBreak />
    </div>
  );
};

export default Day1Agenda;
