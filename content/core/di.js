(() => {
    window.BCSF = {}

    const dependencyTypes = {
        singleton: 0,
        transient: 1
    }

    class DependencyInjection {
        constructor() {
            this.dependencies = {},
            this.singletons = {}
        }
    
        register(typeName, classType, dependencies, dependencyType){
            console.log(`DI::register ${typeName}`)
            this.dependencies[typeName] = {
                typeName,
                classType,
                dependencies: dependencies ?? [],
                dependencyType: dependencyType ?? dependencyTypes.transient
            }
        }
    
        getInstance(typeName, resolved = null) {
            resolved = resolved ?? this.singletons
            if (resolved[typeName]) return resolve[typeName]
    
            const typeInfo = this.dependencies[typeName]
            if (!typeInfo) throw `Unable to resolve type ${typeName}`
            let params = []
            for (var index=0; index<typeInfo.dependencies.length; index++){
                var dependencyTypeName = typeInfo.dependencies[index]
                var dependencyInstance = this.getInstance(dependencyTypeName, resolved)
                params.push(dependencyInstance)
            }       
    
            var result = new typeInfo.classType(...params)
    
            if (typeInfo.dependencyType === dependencyTypes.singleton){
                this.singletons[typeName] = result
            }
            resolved[typeName] = result
    
            return result
        }
    
        dependencyTypes
    }
    
    window.BCSF.services = new DependencyInjection()
    console.log('DI ready')
})()
