    <template>
        <div class="relative">
            <input
            :ref="id"
            :id="id"
            :type="type"
            :class="computeClasses"
            :placeholder="placeholderText"
            :value="modelValue"
            @input="validateInput"
            @blur="$emit('blur')"
            @keyup="keyupInput"
            autocomplete="nope"
            :disabled="disabled"
            >
            <p 
                v-if="isError && showTextError || hasError && showTextError" 
                class="mt-2 text-xs htext-alert-negative flex items-center"
            >
                <img
                    src="/assets/icons/1.TH.WARNING.svg"
                    alt="icon alert red"
                    class="inline w-4 h-4 mr-2"
                />
                {{ stringTextError }}
            </p>
        </div>
    </template>

    <script>
    export default {
        emits: ['update:modelValue', 'handleError','keyupInput'],
        data() {
            return {
                hasError: false,
                stringTextError: ''
            };
        },
        computed: {
            placeholderText() {
                let placeholder;
                switch (this.id) {
                    case 'emaillodging':
                        placeholder = (this.isError) ? 'Introduce email de contacto para continuar' : this.placeholder;
                    break;

                    case 'phonelodging':
                    placeholder = (this.isError) ? 'Introduce número de contacto del hotel' : this.placeholder;
                    break;

                    default:
                        placeholder = this.placeholder;
                    break;
                }
                return placeholder;
            },
            computeClasses() {
                let classes = 'h-8 border border-[#d9d9d9] rounded-[6px] text-sm w-full';

                if (this.hasError || this.isError) {
                    classes += ' border-red-600 htext-alert-negative placeholder-negative no-hover-input';
                } else {
                    classes += ' hoverForm';
                }

                Object.entries(this.customClasses).forEach(([key, value]) => {
                    if (value) {
                        classes += ` ${key}`;
                    }
                });

                return classes;
            }
        },
        watch: {
            hasError (newValue) {
                console.log('handleError',newValue)
                this.$emit('handleError',newValue)
            },
            textError: {
                immediate: true,
                handler(newValue, oldValue) {
                    this.stringTextError = newValue;
                }
            }
        },
        props: {
            id: {
                type: String,
                default: '',
            },
            isError: {
                type: Boolean,
                default: false,
            },
            disabled: {
                type: Boolean,
                default: false,
            },
            placeholder: {
                type: String,
                default: '',
            },
            customClasses: {
                type: Object,
                default: () => ({}),
            },
            type: {
                type: String,
                default: 'text',
            },
            modelValue: {
                default: ''
            },
            showTextError: {
                type: Boolean,
                default: true,
            },
            textError: {
                type: String,
                default: 'Campo requerido',
            },
            mandatory: {
                type: Boolean,
                default: false,
            },
        },
        created(){
            if (this.isError) {
                this.hasError = true;
            }
            this.stringTextError = this.textError;
        },
        methods: {
            keyupInput(){
                this.$emit('keyupInput');
            },
            validateInput(event) {
                const inputValue = this.$refs[this.id].value;
                if (inputValue) {
                    if (this.type === 'email') {
                        this.validateEmail();
                    } else if (this.type === 'url') {
                    this.validateURL();
                    }
                }else{
                    this.hasError = false;
                }
                if((!inputValue || inputValue == '') && this.mandatory){
                    this.hasError = true;
                }
                this.$emit('update:modelValue', event.target.value);
            },
            validateEmail() {
                this.hasError = false;
                const inputValue = this.$refs[this.id].value;
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

                if (!emailRegex.test(inputValue)) {
                    this.hasError = true;

                    this.$emit('update:modelValue', null);
                }
            },

            validateURL() {
                this.hasError = false;
                const inputValue = this.$refs[this.id].value;
                const urlRegex = /\/(\w+)\/(\w+)(\?{1}.*)?$/;

                if (!urlRegex.test(inputValue)) {
                    this.hasError = true;
                    this.$emit('update:modelValue', null);
                }
            },

        },
    };
    </script>

    <style scoped>
    [type='email']:focus,
    [type='url']:focus {
        --tw-ring-inset: none;
        --tw-ring-color: none;
        border-color: initial;
    }
    </style>
