import React from 'react'
import { toast } from 'react-toastify'
import { Button } from 'semantic-ui-react'
import LanguageService from '../../../services/languageService'

export default function LanguageDelete({language}) {

    function deleteLanguage() {
        let languageService = new LanguageService()
        languageService.delete(language.id).then(result => result.data.data)
        toast.error(`${language.language} deleted`)
    }

    return (
        <div>
            <Button size="mini" onClick={() => deleteLanguage()} color="red" icon="delete"></Button>
        </div>
    )
}
