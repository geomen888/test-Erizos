const _  = require('partial-js'),
 tree = [{
        id: 1,
        name: 'VC',
        type: 'Folder',
        children: [{
                id: 4,
                name: 'Folder',
                children: [{
                        id: 8,
                        "mime": "application/x-msdownload",
                        "name": "errlook.exe",
                        "type": "FILE"
                    },
                    {
                        id: 9,
                        "mime": "application/unknown",
                        "name": "errlook.hlp",
                        "type": "FILE"
                    },
                    {
                        id: 10,
                        "mime": "application/x-msdownload",
                        "name": "guidgen.exe",
                        "type": "FILE"
                    }
                ]
            },
            {
                id: 5,
                type: 'Folder',
                children: [{
                        id: 11,
                        "mime": "application/xml",
                        "name": "Rules2BuildRules.xslt",
                        "type": "FILE"
                    },
                    {
                        id: 12,
                        "mime": "application/xml",
                        "name": "Rules2Props.xslt",
                        "type": "FILE"
                    },
                    {
                        id: 13,
                        "mime": "application/xml",
                        "name": "Rules2Targets.xslt",
                        "type": "FILE"
                    },
                    {
                        id: 14,
                        "mime": "application/unknown",
                        "name": "VCVarsPhoneQueryRegistry.bat",
                        "type": "FILE"
                    }
                ]
            },

            {
                id: 6,
                type: 'Folder',
                "children": [{
                        "children": [{
                            id: 11,
                            "mime": "application/x-msdownload",
                            "name": "msdia140.dll",
                            "type": "FILE"
                        }],
                        "name": "amd64",
                        "type": "FOLDER"
                    },
                    {
                        id: 12,
                        "children": [{
                            "mime": "application/x-msdownload",
                            "name": "msdia140.dll",
                            "type": "FILE"
                        }],
                        "name": "arm",
                        "type": "FOLDER"
                    },
                    {
                        "mime": "application/x-msdownload",
                        "name": "msdia140.dll",
                        "type": "FILE",
                        id: 13,
                    }
                ],
                "name": "bin",
                "type": "FOLDER"
            }
        ]
    }
   ,
    {
        id: 2,
        "children": [{
            "mime": "text/plain",
            "name": "dia2.idl",
            "type": "FILE"
        }],
        "name": "idl",
        "type": "FOLDER"
    },
];
_.go(_.im.remove2(tree, '(#1)->children->(#4)'),
  function(tree2) {
    console.log(tree2[0].children); 
    console.log('======================================================================');
    console.info(JSON.stringify(tree, null, 2));
  });