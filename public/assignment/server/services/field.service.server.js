/**
 * Created by VictorMonterroso on 3/15/16.
 */
module.exports = function (app, model) {

    app.get(" /api/assignment/form/:formId/field", getFieldsForForm);
    app.get("/api/assignment/form/:formId/field/:fieldId", getFormFieldById);
    app.post("/api/assignment/form/:formId/field", createField);
    app.delete("/api/assignment/form/:formId/field/:fieldId", deleteFormFieldById);
    app.put("/api/assignment/form/:formId/field/:fieldId", updateFormFieldById);

    function updateFormFieldById (req, res) {
        var formId = req.params.formId;
        var fieldId = req.params.fieldId;
        var form = model.findFormById(formId);
        var field = req.body;

        for (index in form.fields) {
            if (form.fields[index]._id === fieldId) {
                form.fields[index] = field;
                break;
            }
        }

        model.updateForm(formId, form);

        res.json(form.fields);
    }

    function createField (req, res) {
        var now = new Date();
        var formId = req.params.formId;
        var field = req.body;
        field._id = now.getTime();

        //retrieve form, add field, update form with new field
        var form = model.findFormById(formId);
        form.fields.push(field);

        model.updateForm(formId, form);

        res.send (model.findFormById(formId).fields);
    }

    function getFieldsForForm (req, res) {
        var formId = req.params.formId;
        var form = model.findFormById(formId);
        res.json(form.fields);
    }

    function getFormFieldById (req, res) {
        var formId = req.params.formId;
        var fieldId = req.params.fieldId;

        var form = model.findFormById(formId);

        for (var index in form.fields) {
            if (form.fields[index]._id === fieldId) {
                res.json(form.fields[index]);
                return;
            }
        }
        res.send(null);
    }

    function deleteFormFieldById (req, res) {
        var formId = req.params.formId;
        var fieldId = req.params.fieldId;

        model.deleteForm(id);

        res.json (model.findFieldsForForm(formId));
    }
}