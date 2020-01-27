const peuples = {
  débutant: [
    {
      id: 1,
      question:
        "Quel pays abrite la terre du peuple Kabyle, le long du littoral et dans divers massifs montagneux ?",
      propositions: ["Algérie", "Libye", "Tunisie", "Maroc"],
      réponse: "Algérie",
      anecdote:
        "Les Kabyles ont constitué le milieu le plus favorable au développement de la revendication identitaire berbère."
    },
    {
      id: 2,
      question:
        "Quel peuple germanique s'installa au Ve siècle dans l'actuelle Espagne ?",
      propositions: ["Jutes", "Ostrogoths", "Burgondes", "Wisigoths"],
      réponse: "Wisigoths",
      anecdote:
        "Le royaume wisigoth a existé de 418 à 711, à la suite des Grandes invasions et jusqu'au Haut Moyen Âge."
    },
    {
      id: 3,
      question: "Lequel de ces pays ne compte aucun peuple aborigène ?",
      propositions: ["Brésil", "Australie", "Japon", "Canada"],
      réponse: "Brésil",
      anecdote:
        "Le mot « aborigène » renvoie à celui dont les ancêtres sont les premiers habitants connus de sa terre natale."
    },
    {
      id: 4,
      question:
        "Dans lequel de ces pays les Kurdes n'ont-ils pas de population significative ?",
      propositions: ["Géorgie", "Iran", "Irak", "Turquie"],
      réponse: "Géorgie",
      anecdote:
        "Depuis un siècle, certains Kurdes luttent pour leur autodétermination, afin d'avoir leur propre patrie, le Kurdistan."
    },
    {
      id: 5,
      question:
        "Le mot « lusitanien » désigne un peuple originaire de quel pays ?",
      propositions: ["Maroc", "Italie", "Portugal", "Espagne"],
      réponse: "Portugal",
      anecdote:
        "Les historiens et les archéologues sont indécis sur les origines ethniques des Lusitaniens."
    },
    {
      id: 6,
      question:
        "Lequel de ces peuples des Balkans est également appelé « Hellènes » ?",
      propositions: ["Les Grecs", "Les Albanais", "Les Bulgares", "Les Serbes"],
      réponse: "Les Grecs",
      anecdote:
        "Sous lEmpire romain, le terme « Hellènes » servit à désigner toutes les personnes nétant pas de confession juive."
    },
    {
      id: 7,
      question:
        "Pour les Roms, comment se nomme un homme étranger à leur population ?",
      propositions: ["Minouche", "Gadjo", "Djodjo", "Sind"],
      réponse: "Gadjo",
      anecdote:
        "Les Roms sont aussi désignés en France comme des Bohémiens, Gitans, Manouches ou Romanichels."
    },
    {
      id: 8,
      question: "Lequel de ces peuples autochtones vit en Nouvelle-Zélande ?",
      propositions: ["Les Malais", "Les Moriori", "Les Maasaï", "Les Maoris"],
      réponse: "Les Maoris",
      anecdote:
        "Installés par vagues successives à partir du VIIIe siècle, les Maoris sont aujourd'hui plus de 700 000."
    },
    {
      id: 9,
      question:
        "Quel peuple de l'Himalaya vit depuis 1950 sous domination chinoise ?",
      propositions: [
        "Les Népalais",
        "Les Indiens",
        "Les Cambodgiens",
        "Les Tibétains"
      ],
      réponse: "Les Tibétains",
      anecdote:
        "La population tibétaine totale est d'environ 6.6 millions, vivant principalement en République populaire de Chine."
    },
    {
      id: 10,
      question:
        "Lequel de ces termes faisait autrefois référence aux Vikings ?",
      propositions: ["Germains", "Bretons", "Gallois", "Normands"],
      réponse: "Normands",
      anecdote:
        "Les peuples en contact avec les Vikings leur ont donné différents noms : Normands, Danois ou Rus."
    }
  ],
  confirmé: [
    {
      id: 11,
      question:
        "Dans quel pays vivent les Samaritains, signifiant « les observants » ou « ceux qui gardent » ?",
      propositions: ["États-Unis", "France", "Russie", "Israël"],
      réponse: "Israël",
      anecdote:
        "Ils ne se considèrent pas comme Juifs, mais comme des descendants des anciens Israélites du royaume antique de Samarie."
    },
    {
      id: 12,
      question:
        "En France, en quelle année les « nomades » sont-ils devenus des « gens du voyage » ?",
      propositions: ["1999", "1979", "1969", "1989"],
      réponse: "1969",
      anecdote:
        "La loi du 3 janvier 1969 concerne les personnes n'ayant ni domicile ni résidence fixes de plus de six mois."
    },
    {
      id: 13,
      question:
        "Laquelle de ces propositions désigne un peuple originaire des Pays-Bas ?",
      propositions: ["Wallons", "Lusitaniens", "Bataves", "Helléniques"],
      réponse: "Bataves",
      anecdote:
        "Avant et après la conquête romaine, les Bataves peuvent être aussi décrits en tant que Belges des bords du Rhin."
    },
    {
      id: 14,
      question:
        "Quelle est la religion dominante chez les Wolofs, vivant principalement au Sénégal ?",
      propositions: ["Bouddhisme", "Christianisme", "Islam", "Judaïsme"],
      réponse: "Islam",
      anecdote:
        "Encore de religion traditionnelle, les Wolofs pratiquaient le totémisme, le matriarcat et l'hommage aux ancêtres."
    },
    {
      id: 15,
      question:
        "Dans quel pays, le septième le plus grand du monde, vit le peuple Kannada ?",
      propositions: ["Afrique du Sud", "Inde", "Russie", "Canada"],
      réponse: "Inde",
      anecdote:
        "Ce peuple fait partie des groupes minoritaires comme le peuple hindi, ourdou et malayalam."
    },
    {
      id: 16,
      question:
        "Quel peuple antique occupait autrefois les territoires de l'actuelle Bulgarie ?",
      propositions: [
        "Les Thraces",
        "Les Alains",
        "Les Scythes",
        "Les Wisigothes"
      ],
      réponse: "Les Thraces",
      anecdote:
        "Orale, la culture des Thraces était faite de légendes et de mythes incluant la croyance en l'immortalité."
    },
    {
      id: 17,
      question:
        "Laquelle de ces propositions ne désigne pas un peuple du Caucase ?",
      propositions: ["Ossète", "Turkmène", "Mingrélien", "Tchétchène"],
      réponse: "Turkmène",
      anecdote:
        "Historiquement, les Turkmènes ont été présents en Perse (Iran) où ils ont fondé plusieurs dynasties."
    },
    {
      id: 18,
      question:
        "Par quelle tribu amérindienne les chevaux appaloosa sont-ils dressés ?",
      propositions: [
        "Les Kiowas",
        "Les Cherokees",
        "Les Nez-Percés",
        "Les Navajos"
      ],
      réponse: "Les Nez-Percés",
      anecdote:
        "La grande particularité de ces chevaux est d'avoir très souvent une robe tachetée."
    },
    {
      id: 19,
      question: "Quel signe trouve-t-on sur le drapeau du peuple Acadien ?",
      propositions: ["Un cercle", "Un lion", "Un dragon", "Une étoile"],
      réponse: "Une étoile",
      anecdote:
        "Les Acadiens sont descendants des premiers colons français et européens établis en Acadie à l'époque de la Nouvelle-France."
    },
    {
      id: 20,
      question:
        "Combien compte-t-on d'Irlandais aux États-Unis, avec dix fois plus qu'en Irlande elle-même ?",
      propositions: [
        "60 millions",
        "80 millions",
        "40 millions",
        "20 millions"
      ],
      réponse: "40 millions",
      anecdote:
        "Environ la moitié de la population irlandaise mondiale vit aux États-Unis."
    }
  ],
  expert: [
    {
      id: 21,
      question:
        "Quelle est l'origine du peuple Tatars vivant en Europe orientale ?",
      propositions: ["Mongole", "Chinoise", "Ouzbek", "Turque"],
      réponse: "Turque",
      anecdote:
        "Aujourd'hui, parmi les Tatars, on trouve des musulmans et des chrétiens orthodoxes (notamment en Russie)."
    },
    {
      id: 22,
      question: "Dans quel pays vivent les Chaouis, dans le massif des Aurès ?",
      propositions: ["Tunisie", "Algérie", "Maroc", "Égypte"],
      réponse: "Algérie",
      anecdote:
        "Les Chaouis sont le second groupe berbérophone algérien par le nombre de locuteurs."
    },
    {
      id: 23,
      question: "Combien d'ethnies sont officiellement reconnues en Chine ?",
      propositions: ["36", "56", "46", "66"],
      réponse: "56",
      anecdote:
        "Parmi ces ethnies, appelées « nationalités », les Han représentent 92 % de la population chinoise."
    },
    {
      id: 24,
      question:
        "Dans quel pays les Parses se sont-ils installés au XIIIe siècle ?",
      propositions: ["Chine", "Afghanistan", "Inde", "Égypte"],
      réponse: "Inde",
      anecdote:
        "Les Parses descendent des anciens Perses qui émigrèrent en Inde pour se soustraire aux persécutions musulmanes."
    },
    {
      id: 25,
      question:
        "Environ combien d'Afrikaners vivent actuellement en Afrique du Sud ?",
      propositions: ["9 millions", "3 millions", "6 millions", "12 millions"],
      réponse: "3 millions",
      anecdote:
        "On peut aussi les désigner par le terme « Hollandais du Cap » qui est plus précis que le terme « Afrikaner »."
    },
    {
      id: 26,
      question:
        "Combien d'Inuits vivent aux États-Unis, au Canada et au Groenland ?",
      propositions: ["600 000", "450 000", "300 000", "150 000"],
      réponse: "150 000",
      anecdote:
        "Plusieurs questions politiques se posent au sujet des Inuits, principalement des revendications territoriales."
    },
    {
      id: 27,
      question: "Sous quel autre nom est aussi connu le peuple Mohicans ?",
      propositions: [
        "Gens du Cheval",
        "Gens du Serpent",
        "Gens du Loup",
        "Gens du Chien"
      ],
      réponse: "Gens du Loup",
      anecdote:
        "Le roman de James Fenimore Cooper 'Le Dernier des Mohicans' parle effectivement dune tribu Mohican."
    },
    {
      id: 28,
      question: "Quel peuple asiatique se nomme lui-même « hangul » ?",
      propositions: ["Coréen", "Vietnamien", "Japonais", "Chinoise"],
      réponse: "Coréen",
      anecdote:
        "Le hangeul, alphabet officiel du coréen, comprend 40 lettres, appelées « jamos »."
    },
    {
      id: 29,
      question:
        "Où le peuple des Caraïbes vivait-il avant la fin du IXe siècle ?",
      propositions: ["Venezuela", "Canada", "Mexique", "Brésil"],
      réponse: "Venezuela",
      anecdote:
        "Le nom international de « Caraïbes » leur a été définitivement attribué après l'arrivée des Européens dans le Nouveau Monde."
    },
    {
      id: 30,
      question:
        "Dans quel pays vivent les Ladins, parlant une des plus rares langues d'Europe ?",
      propositions: ["Italie", "Espagne", "Pays-Bas", "Allemagne"],
      réponse: "Italie",
      anecdote:
        "Le drapeau des Ladins, de couleur bleu, blanc, vert, contient souvent un bélier en son milieu."
    }
  ]
};

export default peuples;
