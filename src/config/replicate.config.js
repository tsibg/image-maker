import "server-only";

export default {
  //API Token. You can get it from https://replicate.com/account/api-tokens
  token: process.env.REPLICATE_API_TOKEN,
  authorization: `Token ${process.env.REPLICATE_API_TOKEN}`,
  // Model version to a specific Stable Diffusion
  // See https://replicate.com/stability-ai/sdxl
  version: "c221b2b8ef527988fb59bf24a8b97c4561f1c671f73bd389f866bfb27c061316",
  // Prompt prefix and suffix is added to the prompt
  promptPreffix: "",
  promptSuffix: "",
  //Input parameters for the model
  //See https://replicate.com/stability-ai/sdxl
  defaultInput: {
    negative_prompt: "",
    width: 1024,
    height: 768,
    refine: "expert_ensemble_refiner",
    scheduler: "K_EULER",
    lora_scale: 0.6,
    num_outputs: 1,
    guidance_scale: 7.5,
    apply_watermark: false,
    high_noise_frac: 0.8,
    prompt_strength: 0.8,
    num_inference_steps: 25
  },
};
