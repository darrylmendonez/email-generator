import React from 'react'
import KeyMessages from './KeyMessages'

const Publications = ({publications}) => {
  // console.log(publications.length)
  return (
    <span>
      { publications && publications.map(publication => {
        return (
          <tr key={Math.random()}>
            <td>
              <table>
                <tbody>
                  <tr>
                    <td className="publication-fields">
                      <table>
                        <tbody>
                          <tr>
                            <td className="publication-fields">
                              <span className="field-title">Title:</span>
                            </td>
                            <td className="publication-fields">
                              <span className="field-data">
                                { publication.pubTitle }
                              </span>
                            </td>
                          </tr>
                          <tr>
                            <td className="publication-fields">
                              <span className="field-title">Authors:</span>
                            </td>
                            <td className="publication-fields">
                              <span className="field-data">
                                { publication.author} <em>et al.</em>
                              </span>
                            </td>
                          </tr>
                          <tr>
                            <td className="publication-fields">
                              <span className="field-title">Journal:</span>
                            </td>
                            <td className="publication-fields">
                              <span className="field-data">
                                <em>{ publication.journal }</em>
                              </span>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                      <a href={ publication.url } target="_blank" rel="noopener noreferrer">
                        <img src="/img/btn-gotopub.png" alt=""/>
                      </a>
                      
                    </td>
                    
                    <td>
                      <KeyMessages keyMessages={publication.keyMessages} />
                    </td>
                  </tr>
                  <tr>
                    <td className="border-seperator"></td>
                    <td className="border-seperator"></td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
        )
      })}
    </span>
  )
}

export default Publications