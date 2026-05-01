// hud.js

const hudData = {
    mobile: {
        core: `
            <div class="flex justify-between items-end border-b border-white/5 pb-2">
                <div>
                    <div class="text-[8px] font-mono text-neutral-500 uppercase">Process_Node</div>
                    <div class="font-headline-sm text-primary text-base">DIMENSITY_810</div>
                </div>
                <div class="text-right">
                    <div class="text-[8px] font-mono text-neutral-500 uppercase">Core_Clock</div>
                    <div class="font-body-md text-on-surface text-sm">2.40 GHZ</div>
                </div>
            </div>
            <div class="flex justify-between items-end border-b border-white/5 pb-2">
                <div>
                    <div class="text-[8px] font-mono text-neutral-500 uppercase">Display</div>
                    <div class="font-headline-sm text-primary text-base">90Hz IPS LCD</div>
                </div>
                <div class="text-right">
                    <div class="text-[8px] font-mono text-neutral-500 uppercase">Resolution</div>
                    <div class="font-body-md text-on-surface text-sm">FHD+</div>
                </div>
            </div>
            <div class="grid grid-cols-3 gap-2 pt-2">
                <div class="flex flex-col items-center py-2 bg-white/5 border border-white/5">
                    <span class="text-[8px] font-mono text-neutral-400">RAM</span>
                    <span class="text-[10px] font-bold text-on-surface">6 GB</span>
                </div>
                <div class="flex flex-col items-center py-2 bg-white/5 border border-white/5">
                    <span class="text-[8px] font-mono text-neutral-400">STORAGE</span>
                    <span class="text-[10px] font-bold text-on-surface">128 GB</span>
                </div>
                <div class="flex flex-col items-center py-2 bg-white/5 border border-white/5">
                    <span class="text-[8px] font-mono text-neutral-400">DEVICE</span>
                    <span class="text-[10px] font-bold text-on-surface">NOTE 11T</span>
                </div>
            </div>
        `,
        thermal: `
            <div class="flex justify-between items-end border-b border-white/5 pb-2">
                <div>
                    <div class="text-[8px] font-mono text-neutral-500 uppercase">Thermal_Status</div>
                    <div class="font-headline-sm text-primary text-base">OPTIMAL</div>
                </div>
                <div class="text-right">
                    <div class="text-[8px] font-mono text-neutral-500 uppercase">Battery_Temp</div>
                    <div class="font-body-md text-on-surface text-sm">31.2° C</div>
                </div>
            </div>
            <div class="h-2 bg-white/5 w-full mt-4 relative rounded-full overflow-hidden">
                <div class="absolute inset-y-0 left-0 bg-orange-500 w-[35%] transition-all duration-1000"></div>
            </div>
        `,
        graphics: `
            <div class="flex justify-between items-end border-b border-white/5 pb-2">
                <div>
                    <div class="text-[8px] font-mono text-neutral-500 uppercase">GPU_Unit</div>
                    <div class="font-headline-sm text-primary text-base">MALI-G57 MC2</div>
                </div>
                <div class="text-right">
                    <div class="text-[8px] font-mono text-neutral-500 uppercase">Vulkan</div>
                    <div class="font-body-md text-on-surface text-sm">SUPPORTED</div>
                </div>
            </div>
        `,
        network: `
            <div class="flex justify-between items-end border-b border-white/5 pb-2">
                <div>
                    <div class="text-[8px] font-mono text-neutral-500 uppercase">Cellular</div>
                    <div class="font-headline-sm text-primary text-base">5G DUAL-SIM</div>
                </div>
                <div class="text-right">
                    <div class="text-[8px] font-mono text-neutral-500 uppercase">Signal</div>
                    <div class="font-body-md text-on-surface text-sm">-85 dBm</div>
                </div>
            </div>
        `,
        config: `
            <div class="flex justify-between items-end border-b border-white/5 pb-2">
                <div>
                    <div class="text-[8px] font-mono text-neutral-500 uppercase">OS_Version</div>
                    <div class="font-headline-sm text-primary text-base">MIUI 12.5</div>
                </div>
                <div class="text-right">
                    <div class="text-[8px] font-mono text-neutral-500 uppercase">Android</div>
                    <div class="font-body-md text-on-surface text-sm">VERSION 11</div>
                </div>
            </div>
        `,
        specs: `
            <div class="flex justify-between items-end border-b border-white/5 pb-2">
                <div>
                    <div class="text-[8px] font-mono text-neutral-500 uppercase">Device_Model</div>
                    <div class="font-headline-sm text-primary text-base">REDMI NOTE 11T 5G</div>
                </div>
            </div>
            <div class="space-y-2 mt-4 max-h-[150px] overflow-y-auto pr-2 custom-scrollbar">
                <div class="text-xs text-neutral-300 font-mono"><span class="text-orange-500">CPU:</span> MediaTek Dimensity 810</div>
                <div class="text-xs text-neutral-300 font-mono"><span class="text-orange-500">RAM:</span> 6 GB LPDDR4X</div>
                <div class="text-xs text-neutral-300 font-mono"><span class="text-orange-500">Storage:</span> 128 GB UFS 2.2</div>
                <div class="text-xs text-neutral-300 font-mono"><span class="text-orange-500">Display:</span> 6.6" 90Hz IPS LCD (1080x2400)</div>
                <div class="text-xs text-neutral-300 font-mono"><span class="text-orange-500">Battery:</span> 5000mAh (33W Fast Charge)</div>
                <div class="text-xs text-neutral-300 font-mono"><span class="text-orange-500">Cameras:</span> 50MP Main + 8MP UW | 16MP Front</div>
            </div>
        `
    },
    laptop: {
        core: `
            <div class="flex justify-between items-end border-b border-white/5 pb-2">
                <div>
                    <div class="text-[8px] font-mono text-neutral-500 uppercase">Process_Node</div>
                    <div class="font-headline-sm text-primary text-base">RYZEN 5 5600H</div>
                </div>
                <div class="text-right">
                    <div class="text-[8px] font-mono text-neutral-500 uppercase">Frequency</div>
                    <div class="font-body-md text-on-surface text-sm">4.2GHZ BOOST</div>
                </div>
            </div>
            <div class="flex justify-between items-end border-b border-white/5 pb-2">
                <div>
                    <div class="text-[8px] font-mono text-neutral-500 uppercase">Cores/Threads</div>
                    <div class="font-headline-sm text-primary text-base">6C / 12T</div>
                </div>
                <div class="text-right">
                    <div class="text-[8px] font-mono text-neutral-500 uppercase">TDP</div>
                    <div class="font-body-md text-on-surface text-sm">90W</div>
                </div>
            </div>
            <div class="grid grid-cols-3 gap-2 pt-2">
                <div class="flex flex-col items-center py-2 bg-white/5 border border-white/5">
                    <span class="text-[8px] font-mono text-neutral-400">MEMORY</span>
                    <span class="text-[10px] font-bold text-on-surface">16GB DDR4</span>
                </div>
                <div class="flex flex-col items-center py-2 bg-white/5 border border-white/5">
                    <span class="text-[8px] font-mono text-neutral-400">STORAGE</span>
                    <span class="text-[10px] font-bold text-on-surface">512GB NVME</span>
                </div>
                <div class="flex flex-col items-center py-2 bg-white/5 border border-white/5">
                    <span class="text-[8px] font-mono text-neutral-400">DISPLAY</span>
                    <span class="text-[10px] font-bold text-on-surface">16" WUXGA</span>
                </div>
            </div>
        `,
        thermal: `
            <div class="flex justify-between items-end border-b border-white/5 pb-2">
                <div>
                    <div class="text-[8px] font-mono text-neutral-500 uppercase">Cooling_System</div>
                    <div class="font-headline-sm text-primary text-base">ICEBLADES</div>
                </div>
                <div class="text-right">
                    <div class="text-[8px] font-mono text-neutral-500 uppercase">Fan_Speed</div>
                    <div class="font-body-md text-on-surface text-sm">3200 RPM</div>
                </div>
            </div>
        `,
        graphics: `
            <div class="flex justify-between items-end border-b border-white/5 pb-2">
                <div>
                    <div class="text-[8px] font-mono text-neutral-500 uppercase">Integrated_GPU</div>
                    <div class="font-headline-sm text-primary text-base">RADEON VEGA 7</div>
                </div>
            </div>
        `,
        network: `
            <div class="flex justify-between items-end border-b border-white/5 pb-2">
                <div>
                    <div class="text-[8px] font-mono text-neutral-500 uppercase">Wireless</div>
                    <div class="font-headline-sm text-primary text-base">WI-FI 6 (802.11AX)</div>
                </div>
                <div class="text-right">
                    <div class="text-[8px] font-mono text-neutral-500 uppercase">Max_Speed</div>
                    <div class="font-body-md text-on-surface text-sm">2.4 Gbps DL / 2.4 Gbps UL</div>
                </div>
            </div>
        `,
        config: `
            <div class="flex justify-between items-end border-b border-white/5 pb-2">
                <div>
                    <div class="text-[8px] font-mono text-neutral-500 uppercase">System_Model</div>
                    <div class="font-headline-sm text-primary text-base">ASUS VIVOBOOK</div>
                </div>
            </div>
        `,
        specs: `
            <div class="flex justify-between items-end border-b border-white/5 pb-2">
                <div>
                    <div class="text-[8px] font-mono text-neutral-500 uppercase">Full_Specifications</div>
                    <div class="font-headline-sm text-primary text-base">ASUS M1603QA</div>
                </div>
            </div>
            <div class="space-y-2 mt-4 max-h-[150px] overflow-y-auto pr-2 custom-scrollbar">
                <div class="text-xs text-neutral-300 font-mono"><span class="text-orange-500">CPU:</span> AMD Ryzen 5 5600H</div>
                <div class="text-xs text-neutral-300 font-mono"><span class="text-orange-500">RAM:</span> 16 GB DDR4</div>
                <div class="text-xs text-neutral-300 font-mono"><span class="text-orange-500">Storage:</span> 512GB NVMe 2.0 SSD</div>
                <div class="text-xs text-neutral-300 font-mono"><span class="text-orange-500">Display:</span> 16.0" WUXGA (1920 x 1200) 16:10</div>
                <div class="text-xs text-neutral-300 font-mono"><span class="text-orange-500">Graphics:</span> AMD Radeon Graphics</div>
                <div class="text-xs text-neutral-300 font-mono"><span class="text-orange-500">OS:</span> Windows 11 Home</div>
            </div>
        `
    },
    pc: {
        core: `
            <div class="flex justify-between items-end border-b border-white/5 pb-2">
                <div>
                    <div class="text-[8px] font-mono text-neutral-500 uppercase">Processor</div>
                    <div class="font-headline-sm text-primary text-base">RYZEN 5 5600</div>
                </div>
                <div class="text-right">
                    <div class="text-[8px] font-mono text-neutral-500 uppercase">Base / Boost</div>
                    <div class="font-body-md text-on-surface text-sm">3.5 / 4.4 GHZ</div>
                </div>
            </div>
            <div class="flex justify-between items-end border-b border-white/5 pb-2">
                <div>
                    <div class="text-[8px] font-mono text-neutral-500 uppercase">Motherboard</div>
                    <div class="font-headline-sm text-primary text-base">B450M DS3H WIFI</div>
                </div>
                <div class="text-right">
                    <div class="text-[8px] font-mono text-neutral-500 uppercase">Socket</div>
                    <div class="font-body-md text-on-surface text-sm">AM4</div>
                </div>
            </div>
        `,
        thermal: `
            <div class="flex justify-between items-end border-b border-white/5 pb-2">
                <div>
                    <div class="text-[8px] font-mono text-neutral-500 uppercase">CPU_Cooler</div>
                    <div class="font-headline-sm text-primary text-base">HYPER 212 V3</div>
                </div>
            </div>
        `,
        graphics: `
            <div class="flex justify-between items-end border-b border-white/5 pb-2">
                <div>
                    <div class="text-[8px] font-mono text-neutral-500 uppercase">Dedicated_GPU</div>
                    <div class="font-headline-sm text-primary text-base">RTX 3070 8GB</div>
                </div>
                <div class="text-right">
                    <div class="text-[8px] font-mono text-neutral-500 uppercase">VRAM</div>
                    <div class="font-body-md text-on-surface text-sm">GDDR6</div>
                </div>
            </div>
        `,
        network: `
            <div class="flex justify-between items-end border-b border-white/5 pb-2">
                <div>
                    <div class="text-[8px] font-mono text-neutral-500 uppercase">Wireless</div>
                    <div class="font-headline-sm text-primary text-base">INTEGRATED WI-FI</div>
                </div>
            </div>
        `,
        config: `
            <div class="flex justify-between items-end border-b border-white/5 pb-2">
                <div>
                    <div class="text-[8px] font-mono text-neutral-500 uppercase">Power_Supply</div>
                    <div class="font-headline-sm text-primary text-base">MWE 650W V2</div>
                </div>
                <div class="text-right">
                    <div class="text-[8px] font-mono text-neutral-500 uppercase">Rating</div>
                    <div class="font-body-md text-on-surface text-sm">80+ BRONZE</div>
                </div>
            </div>
        `,
        specs: `
            <div class="flex justify-between items-end border-b border-white/5 pb-2">
                <div>
                    <div class="text-[8px] font-mono text-neutral-500 uppercase">Custom_Build</div>
                    <div class="font-headline-sm text-primary text-base">SYSTEM SPECIFICATIONS</div>
                </div>
            </div>
            <div class="space-y-2 mt-4 max-h-[150px] overflow-y-auto pr-2 custom-scrollbar">
                <div class="text-xs text-neutral-300 font-mono"><span class="text-orange-500">Case:</span> Cooler Master CMP520 ARGB Mid Tower</div>
                <div class="text-xs text-neutral-300 font-mono"><span class="text-orange-500">Mobo:</span> Gigabyte B450M DS3H WI-FI</div>
                <div class="text-xs text-neutral-300 font-mono"><span class="text-orange-500">CPU:</span> AMD Ryzen 5 5600 3.6GHz</div>
                <div class="text-xs text-neutral-300 font-mono"><span class="text-orange-500">RAM:</span> 16GB (2x8) + 16GB (1x16) DDR4 3200MHz</div>
                <div class="text-xs text-neutral-300 font-mono"><span class="text-orange-500">Storage 1:</span> WD Blue SN550 500GB NVMe M.2</div>
                <div class="text-xs text-neutral-300 font-mono"><span class="text-orange-500">Storage 2:</span> WD 1TB 3.5" HDD</div>
                <div class="text-xs text-neutral-300 font-mono"><span class="text-orange-500">Cooler:</span> CM Hyper 212 Spectrum V3 ARGB</div>
                <div class="text-xs text-neutral-300 font-mono"><span class="text-orange-500">PSU:</span> CM MWE 650 Watt V2 80+ Bronze</div>
                <div class="text-xs text-neutral-300 font-mono"><span class="text-orange-500">GPU:</span> Colorful iGame RTX 3070 Ultra W OC 8GB</div>
            </div>
        `
    }
};

document.addEventListener('DOMContentLoaded', () => {
    // Determine current page
    let pageType = 'mobile';
    if (window.location.pathname.includes('laptop')) pageType = 'laptop';
    if (window.location.pathname.includes('pc')) pageType = 'pc';

    const hudContainer = document.getElementById('hud-content');
    
    // Function to update HUD with animation
    function updateHUD(sectionKey) {
        if (!hudContainer || !hudData[pageType][sectionKey]) return;
        
        // Add exit animation class
        hudContainer.classList.add('opacity-0', 'translate-x-4');
        
        setTimeout(() => {
            // Swap content
            hudContainer.innerHTML = hudData[pageType][sectionKey];
            
            // Remove exit, add enter animation
            hudContainer.classList.remove('opacity-0', 'translate-x-4');
        }, 300); // Wait for transition
    }

    // Bind Sidebar Buttons
    const btnIds = ['core', 'thermal', 'graphics', 'network', 'config'];
    
    function setActiveButton(activeId) {
        btnIds.forEach(id => {
            const btn = document.getElementById('btn-' + id);
            if (btn) {
                if (id === activeId) {
                    btn.classList.add('text-orange-500', 'bg-orange-500/10', 'border-r-2', 'border-orange-500');
                    btn.classList.remove('text-neutral-500', 'hover:text-primary', 'hover:text-orange-500');
                } else {
                    btn.classList.remove('text-orange-500', 'bg-orange-500/10', 'border-r-2', 'border-orange-500');
                    btn.classList.add('text-neutral-500', 'hover:text-orange-500'); // Assuming orange-500 is the hover color for most pages
                }
            }
        });
    }

    btnIds.forEach(id => {
        const btn = document.getElementById('btn-' + id);
        if (btn) {
            btn.addEventListener('click', () => {
                updateHUD(id);
                setActiveButton(id);
            });
        }
    });

    // Bind Specs Button
    const btnSpecs = document.getElementById('btn-specs');
    if (btnSpecs) {
        btnSpecs.addEventListener('click', () => updateHUD('specs'));
    }
});
