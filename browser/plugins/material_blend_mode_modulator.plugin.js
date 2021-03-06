E2.p = E2.plugins["material_blend_mode_modulator"] = function(core, node)
{
	this.desc = 'Set the blend mode.';
	
	this.input_slots = [ 
		{ name: 'material', dt: core.datatypes.MATERIAL, desc: 'Input material.', def: core.renderer.material_default },
		{ name: 'blend mode', dt: core.datatypes.FLOAT, desc: 'Set the material blend mode.', def: Renderer.blend_mode.NORMAL } 
	];
	
	this.output_slots = [
		{ name: 'material', dt: core.datatypes.MATERIAL, desc: 'The modified material.' }
	];
};

E2.p.prototype.update_input = function(slot, data)
{
	if(slot.index === 0)
		this.material = data;
	else
		this.blend_mode = data;
};

E2.p.prototype.update_state = function()
{
	this.material.blend_mode = this.blend_mode;
};

E2.p.prototype.update_output = function(slot)
{
	return this.material;
};

E2.p.prototype.state_changed = function(ui)
{
	if(!ui)
	{
		this.material = new Material();
		this.blend_mode = Renderer.blend_mode.NORMAL;
	}
};
