const rewire = require("rewire")
const createComponent = rewire("./createComponent")
const parseComponentPath = createComponent.__get__("parseComponentPath")
const createStyleFile = createComponent.__get__("createStyleFile")
const createIndexFile = createComponent.__get__("createIndexFile")
const createPackageFile = createComponent.__get__("createPackageFile")
const createComponentFile = createComponent.__get__("createComponentFile")
// @ponicode
describe("parseComponentPath", () => {
    test("0", () => {
        let callFunction = () => {
            parseComponentPath({ lastIndexOf: () => 224 })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            parseComponentPath({ lastIndexOf: () => 142 })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            parseComponentPath({ lastIndexOf: () => 196 })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            parseComponentPath({ lastIndexOf: () => 159 })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            parseComponentPath({ lastIndexOf: () => 239 })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            parseComponentPath({ lastIndexOf: () => NaN })
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("createStyleFile", () => {
    test("0", () => {
        let callFunction = () => {
            createStyleFile({ dirpath: "/net/panel.dvi.crd" }, { fileExtension: ".styl", useModules: "UP72NWV" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            createStyleFile({ dirpath: "/var/up_pink.stl.atx" }, { fileExtension: ".styl", useModules: "UP72NWV" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            createStyleFile({ dirpath: "/var/up_pink.stl.atx" }, { fileExtension: ".styl", useModules: "IM68JBJ" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            createStyleFile({ dirpath: "/net/panel.dvi.crd" }, { fileExtension: ".styl", useModules: "AM32WSU" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            createStyleFile({ dirpath: "/etc/ppp/pre_emptive_manager.efif.bcpio" }, { fileExtension: ".styl", useModules: "AM32WSU" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            createStyleFile(undefined, { fileExtension: undefined, useModules: undefined })
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("createIndexFile", () => {
    test("0", () => {
        let callFunction = () => {
            createIndexFile({ dirpath: "/etc/ppp/pre_emptive_manager.efif.bcpio" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            createIndexFile({ dirpath: "/usr/sbin/tan_district.geo.qxt" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            createIndexFile({ dirpath: "/tmp/payment_invoice.ogg.cmc" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            createIndexFile({ dirpath: "/net/panel.dvi.crd" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            createIndexFile({ dirpath: "/var/up_pink.stl.atx" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            createIndexFile(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("createPackageFile", () => {
    test("0", () => {
        let callFunction = () => {
            createPackageFile({ dirpath: "/usr/sbin/tan_district.geo.qxt", name: "Anas" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            createPackageFile({ dirpath: "/etc/ppp/pre_emptive_manager.efif.bcpio", name: "George" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            createPackageFile({ dirpath: "/etc/ppp/pre_emptive_manager.efif.bcpio", name: "Michael" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            createPackageFile({ dirpath: "/net/panel.dvi.crd", name: "Jean-Philippe" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            createPackageFile({ dirpath: "/net/panel.dvi.crd", name: "George" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            createPackageFile(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("createComponentFile", () => {
    test("0", () => {
        let callFunction = () => {
            createComponentFile({ dirpath: "/var/up_pink.stl.atx" }, "*", { isFunctional: true, useStyleModules: true, styleExtension: "jpeg" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            createComponentFile({ dirpath: "/etc/ppp/pre_emptive_manager.efif.bcpio" }, "*", { isFunctional: false, useStyleModules: true, styleExtension: "mpe" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            createComponentFile({ dirpath: "/tmp/payment_invoice.ogg.cmc" }, "%s > option", { isFunctional: true, useStyleModules: true, styleExtension: "pdf" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            createComponentFile({ dirpath: "/var/up_pink.stl.atx" }, "kind", { isFunctional: true, useStyleModules: false, styleExtension: "m2v" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            createComponentFile({ dirpath: "/etc/ppp/pre_emptive_manager.efif.bcpio" }, "--selector=%s", { isFunctional: false, useStyleModules: true, styleExtension: "m2v" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            createComponentFile(undefined, undefined, { isFunctional: false, useStyleModules: undefined, styleExtension: "" })
        }
    
        expect(callFunction).not.toThrow()
    })
})
