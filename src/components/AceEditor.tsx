import React, { useEffect, useState } from 'react';

import AceEditor from 'react-ace';
import 'ace-builds/src-min-noconflict/ext-language_tools';
import 'ace-builds/src-noconflict/mode-mysql';
import 'ace-builds/src-noconflict/snippets/mysql';
import 'ace-builds/src-noconflict/theme-eclipse';
import './AceEditor.scss';
import { format } from 'sql-formatter';
import langTools from 'ace-builds/src-noconflict/ext-language_tools';
import NodeSQLParser from 'node-sql-parser';
import { type } from 'os';
const AceEditorComponent = () => {
  var wordList = [
    'AAAP_BUSINESS_KEY',
    'AAAP_COUNTRY_CODE',
    'AAAP_COUNTRY_CODE_ICAO',
  ];

  const [codevalue, setCodeValue] = useState('');
  const [syntaxError, setSyntaxError] = useState<any>({});
  function onChange(newValue: any) {
    console.log('change', newValue, typeof newValue);
    setCodeValue(newValue);
    syntaxCheck();
  }
  const syntaxCheck = () => {
    setTimeout(() => {
      let temp = codevalue;
      const parser = new NodeSQLParser.Parser();
      console.log(temp);
      const ast = parser.astify(temp);
      setSyntaxError(ast);
      console.log(syntaxError);
    }, 1000);
  };
  useEffect(() => {
    var staticWordCompleter = {
      getCompletions: function (
        editor: any,
        session: any,
        pos: any,
        prefix: any,
        callback: (
          arg0: null,
          arg1: { caption: string; value: string; meta: string }[]
        ) => void
      ) {
        callback(
          null,
          wordList.map(function (word) {
            return {
              caption: word,
              value: word,
              meta: 'local',
            };
          })
        );
      },
    };
    langTools.addCompleter(staticWordCompleter);
  }, []);
  const formatCode = () => {
    const formattedCode = format(codevalue);

    setCodeValue(formattedCode);
    // console.log(formattedCode);

    // let temp = codevalue;
    // const parser = new NodeSQLParser.Parser();
    // const ast = parser.astify(temp);
    // setSyntaxError(ast);
    // console.log(syntaxError);
  };
  return (
    <div>
      <AceEditor
        mode="mysql"
        theme="eclipse"
        onChange={onChange}
        value={codevalue}
        name="UNIQUE_ID_OF_DIV"
        style={{
          height: '231px',
          border: '1px solid black',
          padding: '10px',
          borderRadius: '16px',
        }}
        setOptions={{
          useWorker: true, // <<----- USE THIS OPTION TO DISABLE THE SYNTAX CHECKER
        }}
        editorProps={{ $blockScrolling: true }}
        enableBasicAutocompletion={true}
        enableLiveAutocompletion={true}
        enableSnippets={true}
      />
      {/* {syntaxError.length > 0 &&
        syntaxError.map((itm: any) => (
          <div>
            <span>Error: </span> <span>{itm}</span>
          </div>
        ))} */}
      <button onClick={formatCode}>Format Code with Prettier</button>
    </div>
  );
};

export default AceEditorComponent;
