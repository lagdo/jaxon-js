/**
 * translation for: jaxon v.x.x
 * @version: 1.0.0
 * @author: mic <info@joomx.com>
 * @copyright jaxon project
 * @license GNU/GPL
 * @package jaxon x.x.x
 * @since v.x.x.x
 * save as UTF-8
 */

if ('undefined' != typeof jaxon.debug) {
    /*
        Array: text
    */
    jaxon.debug.messages = {
        warning: 'ATTENTION : ',
        error: 'ERREUR : ',
        heading: 'MESSAGE DE DEBUG JAXON :\n',
        request: {
            uri: 'URI: ',
            init: 'INITIALISATION DE LA REQUETE',
            creating: 'INITIALISATION DE L\'OBJET REQUETE',
            starting: 'DEBUT DE LA REQUETE',
            preparing: 'PREPARATION DE LA REQUETE',
            calling: 'APPEL : ',
            sending: 'ENVOI DE LA REQUETE',
            sent: 'ENVOYE [{length} octets]'
        },
        response: {
            long: '...\n[REPONSE LONGUE]\n...',
            success: 'RECUS [statut : {status}, taille: {length} octets, temps: {duration}ms] :\n',
            content: 'Le serveur a retourné le statut HTTP suivant : {status}\nRECUS :\n{text}',
            redirect: 'Le serveur a indiqué une redirection vers :<br />{location}',
            no_processor: 'Aucune fonction disponible pour traiter la réponse du serveur.\n',
            check_errors:  '.\nVérifie s\'il existe des messages d\'erreur du serveur.'
        },
        processing: {
            parameters: 'TRAITEMENT DES PARAMETRES [{count}]',
            no_parameters: 'AUCUN PARAMETRE A TRAITER',
            calling: 'DEBUT DE L\'APPEL JAXON (déprécié: utilisez plutôt jaxon.request)',
            calling: 'APPEL JAXON ({cmd}, {options})',
            done: 'TERMINE [{duration}ms]'
        }
    };

    jaxon.debug.exceptions = [];
    jaxon.debug.exceptions[10001] = 'Réponse XML non valide : La réponse contient une balise inconnue : {data}.';
    jaxon.debug.exceptions[10002] = 'GetRequestObject : XMLHttpRequest n\'est pas disponible, jaxon est désactivé.';
    jaxon.debug.exceptions[10003] = 'File pleine : Ne peut ajouter un objet à la file car elle est pleine.';
    jaxon.debug.exceptions[10004] = 'Réponse XML non valide : La réponse contient une balise ou un texte inattendu : {data}.';
    jaxon.debug.exceptions[10005] = 'URI de la requete non valide : URI non valide ou manquante; auto-détection échouée; veuillez en spécifier une explicitement.';
    jaxon.debug.exceptions[10006] = 'Réponse de commande invalide : Commande de réponse reçue mal formée.';
    jaxon.debug.exceptions[10007] = 'Réponse de commande invalide : Commande [{data}] est inconnue.';
    jaxon.debug.exceptions[10008] = 'L\'élément d\'ID [{data}] est introuvable dans le document.';
    jaxon.debug.exceptions[10009] = 'Requête invalide : Aucun nom de fonction indiqué en paramètre.';
    jaxon.debug.exceptions[10010] = 'Requête invalide : Aucun objet indiqué en paramètre pour la fonction.';

    jaxon.debug.lang = {
        isLoaded: true
    };
}

if (typeof jaxon.config != 'undefined' && typeof jaxon.config.status != 'undefined') {
    /*
        Object: mise � jour
    */
    jaxon.config.status.update = function() {
        return {
            onRequest: function() {
                window.status = 'Envoi de la requête...';
            },
            onWaiting: function() {
                window.status = 'Attente de la réponse...';
            },
            onProcessing: function() {
                window.status = 'En cours de traitement...';
            },
            onComplete: function() {
                window.status = 'Fait.';
            }
        }
    }
}
