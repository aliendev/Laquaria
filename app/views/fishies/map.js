function(doc) {
    if (doc._id.substr(0,5) === "fish_") {
        emit(doc._id, {
        	"commonName":           doc.commonName,
        	"scientificName":       doc.scientificName,
        	"photo":                doc.photo,
        	"family":               doc.family,
        	"species":              doc.species,
        	"sizeMax":              doc.sizeMax,
        	"lifeSpan":             doc.lifeSpan,
        	"habitat":              doc.habitat,
        	"tankSize":             doc.tankSize,
        	"tankRegion":           doc.tankRegion,
        	"tankMates":            doc.tankMates,
        	"description":          doc.description,
        	"tempRangeL":           doc.tempRangeL,
        	"tempRangeH":           doc.tempRangeH,
        	"phRangeL":             doc.phRangeL,
        	"phRangeH":             doc.phRangeH,
        	"hardnessRangeL":       doc.hardnessRangeL,
        	"hardnessRangeH":       doc.hardnessRangeH,
        	"breedingInfo":         doc.breedingInfo,
        	"sexingInfo":           doc.sexingInfo,
        	"diet":                 doc.diet,
        	"temperment":           doc.temperment,
        	"commonDeseases":       doc.commonDeseases
        });
    };
};

