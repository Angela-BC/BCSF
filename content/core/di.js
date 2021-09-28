(() => {
    const dependencyTypes = {
        singleton: 0,
        transient: 1,
        perContext: 2
    }

    class DependencyInjection {
        constructor() {
            this.dependencies = {},
            this.singletons = {},
            this.dependencyTypes = dependencyTypes
        }
    
        registerInstance(typeName, instance){
           this.singletons[typeName] = instance
           this.dependencies[typeName] = []
        }

        register(typeName, classType, dependencies, dependencyType){
            if (!this.dependencies[typeName]) {
                this.dependencies[typeName] = []
            }
            this.dependencies[typeName].push({
                typeName,
                classType,
                dependencies: dependencies ?? [],
                dependencyType: dependencyType ?? dependencyTypes.transient
            })
        }
    
        getInstance(typeName, resolved = null) {
            resolved = resolved ?? {...this.singletons}
            if (resolved[typeName]) return resolved[typeName]
    
            const typeInfos = this.dependencies[typeName]
            if (!typeInfos || typeInfos.length === 0) throw `Unable to resolve type ${typeName}`
            let result = []
            for (var i1=0; i1 < typeInfos.length; i1++){
                const typeInfo = typeInfos[i1]
                const resolvedContext = {...this.singletons}
                let params = []
                for (let i2=0; i2 < typeInfo.dependencies.length; i2++){
                    var dependencyTypeName = typeInfo.dependencies[i2]
                    var dependencyInstance = this.getInstance(dependencyTypeName, typeInfo.dependencyType === dependencyTypes.perContext ? resolvedContext : resolved)
                    params.push(dependencyInstance)
                }       
        
                var instance = new typeInfo.classType(...params)
                result.push(instance)
            }
            if (result.length === 0){
                throw `Unable to resolve type ${typeName}`
            }
    
            if (result.length === 1){
                result = result[0]
            }
    
            if (typeInfos[0].dependencyType === dependencyTypes.singleton){
                this.singletons[typeName] = result
            }
            resolved[typeName] = result
    
            return result
        }
    
    }
    
    const instance = new DependencyInjection()
    instance.registerInstance('services', instance)
    window.BCSF = instance
    console.log('DI ready')
})()
